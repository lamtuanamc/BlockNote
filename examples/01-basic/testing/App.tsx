import { uploadToTmpFilesDotOrg_DEV_ONLY } from "blocknote-core-ts";
import "blocknote-core-tsts/fonts/inter.css";
import { BlockNoteView } from "blocknote-mantine-ts";
import "blocknote-mantine-ts/style.css";
import { useCreateBlockNote } from "blocknote-react-ts";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
