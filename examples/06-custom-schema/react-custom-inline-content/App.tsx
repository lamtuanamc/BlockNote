import { BlockNoteSchema, defaultInlineContentSpecs } from "blocknote-core-ts";
import "blocknote-core-ts/fonts/inter.css";
import {
  createReactInlineContentSpec,
  useCreateBlockNote,
} from "blocknote-react-ts";
import { BlockNoteView } from "blocknote-mantine-ts";
import "blocknote-mantine-ts/style.css";

const mention = createReactInlineContentSpec(
  {
    type: "mention",
    propSchema: {
      user: {
        default: "",
      },
    },
    content: "none",
  },
  {
    render: (props) => {
      return <span>@{props.inlineContent.props.user}</span>;
    },
  }
);

const tag = createReactInlineContentSpec(
  {
    type: "tag",
    propSchema: {},
    content: "styled",
  },
  {
    render: (props) => {
      return (
        <span>
          #<span ref={props.contentRef}></span>
        </span>
      );
    },
  }
);

const schema = BlockNoteSchema.create({
  inlineContentSpecs: {
    mention,
    tag,
    ...defaultInlineContentSpecs,
  },
});

export default function ReactInlineContent() {
  const editor = useCreateBlockNote({
    schema,
    initialContent: [
      {
        type: "paragraph",
        content: [
          "I enjoy working with ",
          {
            type: "mention",
            props: {
              user: "Matthew",
            },
            content: undefined,
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          "I love ",
          {
            type: "tag",
            content: "BlockNote",
          },
        ],
      },
    ],
  });

  return <BlockNoteView editor={editor} />;
}
