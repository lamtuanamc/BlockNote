import { BlockNoteSchema, defaultStyleSpecs } from "blocknote-core-ts";
import "blocknote-core-tsts/fonts/inter.css";
import {
  createReactStyleSpec,
  FormattingToolbar,
  FormattingToolbarController,
  FormattingToolbarProps,
  useActiveStyles,
  useBlockNoteEditor,
  useComponentsContext,
  useCreateBlockNote,
} from "blocknote-react-ts";
import { BlockNoteView } from "blocknote-mantine-ts";
import "blocknote-mantine-ts/style.css";

const small = createReactStyleSpec(
  {
    type: "small",
    propSchema: "boolean",
  },
  {
    render: (props) => {
      return <small ref={props.contentRef}></small>;
    },
  }
);

const fontSize = createReactStyleSpec(
  {
    type: "fontSize",
    propSchema: "string",
  },
  {
    render: (props) => {
      return (
        <span ref={props.contentRef} style={{ fontSize: props.value }}></span>
      );
    },
  }
);

export const schema = BlockNoteSchema.create({
  styleSpecs: {
    ...defaultStyleSpecs,
    small,
    fontSize,
  },
});

const CustomFormattingToolbar = (props: FormattingToolbarProps) => {
  const editor = useBlockNoteEditor(schema);
  const activeStyles = useActiveStyles(editor);

  const Components = useComponentsContext()!;

  return (
    <FormattingToolbar>
      <Components.FormattingToolbar.Button
        mainTooltip={"small"}
        onClick={() => {
          editor.toggleStyles({
            small: true,
          });
        }}
        isSelected={activeStyles.small}>
        Small
      </Components.FormattingToolbar.Button>
      <Components.FormattingToolbar.Button
        mainTooltip={"font size"}
        onClick={() => {
          editor.toggleStyles({
            fontSize: "30px",
          });
        }}
        isSelected={!!activeStyles.fontSize}>
        Font size
      </Components.FormattingToolbar.Button>
    </FormattingToolbar>
  );
};

export default function App() {
  const editor = useCreateBlockNote(
    {
      schema,
      initialContent: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "large text",
              styles: {
                fontSize: "30px",
              },
            },
            {
              type: "text",
              text: "small text",
              styles: {
                small: true,
              },
            },
          ],
        },
      ],
    },
    []
  );

  return (
    <BlockNoteView className="root" editor={editor} formattingToolbar={false}>
      <FormattingToolbarController
        formattingToolbar={CustomFormattingToolbar}
      />
    </BlockNoteView>
  );
}
