import "blocknote-core-ts/fonts/inter.css";
import { useCreateBlockNote } from "blocknote-react-ts";
import { BlockNoteView } from "blocknote-mantine-ts";
import "blocknote-mantine-ts/style.css";
import { ArrowConversionExtension } from "./ArrowConversionExtension";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    _tiptapOptions: {
      extensions: [ArrowConversionExtension],
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
