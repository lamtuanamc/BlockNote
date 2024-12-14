import { locales } from "blocknote-core-ts";
import "blocknote-core-ts/fonts/inter.css";
import { BlockNoteView } from "blocknote-mantine-ts";
import "blocknote-mantine-ts/style.css";
import { useCreateBlockNote } from "blocknote-react-ts";

export default function App() {
  // We use the English, default dictionary
  const locale = locales["en"];

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    // We override the `placeholders` in our dictionary
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        // We override the default placeholder
        default: "This is a custom placeholder",
        // We override the heading placeholder
        heading: "This is a custom heading",
      },
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
