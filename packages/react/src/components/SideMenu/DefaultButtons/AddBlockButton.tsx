/* eslint-disable no-console */
import {
  BlockSchema,
  DefaultBlockSchema,
  DefaultInlineContentSchema,
  DefaultStyleSchema,
  InlineContentSchema,
  StyleSchema,
} from "blocknote-core-ts";
import { AiOutlinePlus } from "react-icons/ai";

import { useCallback } from "react";
import { useComponentsContext } from "../../../editor/ComponentsContext.js";
import { useBlockNoteEditor } from "../../../hooks/useBlockNoteEditor.js";
import { useDictionary } from "../../../i18n/dictionary.js";
import { SideMenuProps } from "../SideMenuProps.js";

export const AddBlockButton = <
  BSchema extends BlockSchema = DefaultBlockSchema,
  I extends InlineContentSchema = DefaultInlineContentSchema,
  S extends StyleSchema = DefaultStyleSchema
>(
  props: Pick<SideMenuProps<BSchema, I, S>, "block">
) => {
  const Components = useComponentsContext()!;
  const dict = useDictionary();

  const editor = useBlockNoteEditor<BSchema, I, S>();

  const onClick = useCallback(() => {
    const blockContent = props?.block?.content;
    console.log("blockContent::::::::::::::::::::", blockContent);
    const isBlockEmpty =
      blockContent !== undefined &&
      Array.isArray(blockContent) &&
      blockContent.length === 0;
    console.log("isBlockEmpty::::::::::::::::::::", isBlockEmpty);

    if (isBlockEmpty) {
      console.log("props.block::::::::::::::::::::", props.block);
      editor.setTextCursorPosition(props.block);
      editor.openSuggestionMenu("/");
    } else {
      const insertedBlock = editor.insertBlocks(
        [{ type: "paragraph" }],
        props.block,
        "after"
      )[0];
      console.log("insertedBlock::::::::::::::::::::", insertedBlock);
      editor.setTextCursorPosition(insertedBlock);
      editor.openSuggestionMenu("/");
    }
  }, [editor, props.block]);

  return (
    <Components.SideMenu.Button
      className={"bn-button"}
      label={dict.side_menu.add_block_label}
      icon={
        <AiOutlinePlus size={24} onClick={onClick} data-test="dragHandleAdd" />
      }
    />
  );
};
