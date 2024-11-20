import "blocknote-core-ts/fonts/inter.css";
import { useCreateBlockNote } from "blocknote-react-ts";
import { BlockNoteView } from "@blocknote/ariakit";
import "@blocknote/ariakit/style.css";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
