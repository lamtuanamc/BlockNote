import "blocknote-core-ts/fonts/inter.css";
import { useCreateBlockNote } from "blocknote-react-ts";
import { BlockNoteView } from "blocknote-mantine-ts";
import "blocknote-mantine-ts/style.css";

import "./styles.css";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "paragraph",
        content: "You'll see that the font has been changed to Comic Sans MS",
      },
      {
        type: "paragraph",
      },
    ],
  });

  // Renders the editor instance using a React component.
  // Adds `data-changing-font-demo` to restrict styles to only this demo.
  return <BlockNoteView editor={editor} data-changing-font-demo />;
}
