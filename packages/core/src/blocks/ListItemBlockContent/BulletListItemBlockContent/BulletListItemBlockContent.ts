import { InputRule } from "@tiptap/core";
import { updateBlockCommand } from "../../../api/blockManipulation/commands/updateBlock/updateBlock.js";
import { getBlockInfoFromSelection } from "../../../api/getBlockInfoFromPos.js";
import {
  PropSchema,
  createBlockSpecFromStronglyTypedTiptapNode,
  createStronglyTypedTiptapNode,
} from "../../../schema/index.js";
import { createDefaultBlockDOMOutputSpec } from "../../defaultBlockHelpers.js";
import { defaultProps } from "../../defaultProps.js";
import { handleEnter } from "../ListItemKeyboardShortcuts.js";

export const bulletListItemPropSchema = {
  ...defaultProps,
} satisfies PropSchema;

const BulletListItemBlockContent = createStronglyTypedTiptapNode({
  name: "bulletListItem",
  content: "inline*",
  group: "blockContent",
  // This is to make sure that check list parse rules run before, since they
  // both parse `li` elements but check lists are more specific.
  priority: 90,
  addInputRules() {
    return [
      // Creates an unordered list when starting with "-", "+", or "*".
      new InputRule({
        find: new RegExp(`^[-+*]\\s$`),
        handler: ({ state, chain, range }) => {
          const blockInfo = getBlockInfoFromSelection(state);
          if (
            !blockInfo.isBlockContainer ||
            blockInfo.blockContent.node.type.spec.content !== "inline*" ||
            blockInfo.blockContent.node.type.name !== "paragraph"
          ) {
            return;
          }

          chain()
            .command(
              updateBlockCommand(
                this.options.editor,
                blockInfo.bnBlock.beforePos,
                {
                  type: "bulletListItem",
                  props: {},
                }
              )
            )
            // Removes the "-", "+", or "*" character used to set the list.
            .deleteRange({ from: range.from, to: range.to });
        },
      }),
    ];
  },

  addKeyboardShortcuts() {
    return {
      Enter: () => handleEnter(this.options.editor),
      "Mod-Shift-8": () => {
        const blockInfo = getBlockInfoFromSelection(this.editor.state);
        if (
          !blockInfo.isBlockContainer ||
          blockInfo.blockContent.node.type.spec.content !== "inline*" ||
          blockInfo.blockContent.node.type.name !== "paragraph"
        ) {
          return true;
        }

        return this.editor.commands.command(
          updateBlockCommand(this.options.editor, blockInfo.bnBlock.beforePos, {
            type: "bulletListItem",
            props: {},
          })
        );
      },
    };
  },

  parseHTML() {
    return [
      // Case for regular HTML list structure.
      {
        tag: "div[data-content-type=" + this.name + "]", // TODO: remove if we can't come up with test case that needs this
      },
      {
        tag: "li",
        getAttrs: (element) => {
          if (typeof element === "string") {
            return false;
          }

          const parent = element.parentElement;

          if (parent === null) {
            return false;
          }

          if (
            parent.tagName === "UL" ||
            (parent.tagName === "DIV" && parent.parentElement!.tagName === "UL")
          ) {
            return {};
          }

          return false;
        },
        node: "bulletListItem",
      },
      // Case for BlockNote list structure.
      {
        tag: "p",
        getAttrs: (element) => {
          if (typeof element === "string") {
            return false;
          }

          const parent = element.parentElement;

          if (parent === null) {
            return false;
          }

          if (parent.getAttribute("data-content-type") === "bulletListItem") {
            return {};
          }

          return false;
        },
        priority: 300,
        node: "bulletListItem",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return createDefaultBlockDOMOutputSpec(
      this.name,
      // We use a <p> tag, because for <li> tags we'd need a <ul> element to put
      // them in to be semantically correct, which we can't have due to the
      // schema.
      "p",
      {
        ...(this.options.domAttributes?.blockContent || {}),
        ...HTMLAttributes,
      },
      this.options.domAttributes?.inlineContent || {}
    );
  },
});

export const BulletListItem = createBlockSpecFromStronglyTypedTiptapNode(
  BulletListItemBlockContent,
  bulletListItemPropSchema
);
