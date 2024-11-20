import { BlockNoteSchema, filterSuggestionItems } from "blocknote-core-ts";
import "blocknote-core-ts/style.css";
import { BlockNoteView } from "blocknote-mantine-ts";
import "blocknote-mantine-ts/style.css";
import {
  BlockNoteDefaultUI,
  SuggestionMenuController,
  getDefaultReactSlashMenuItems,
  useCreateBlockNote,
} from "blocknote-react-ts";

import { Alert, insertAlert } from "../customblocks/Alert.js";
import { Button } from "../customblocks/Button.js";

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

const schema = BlockNoteSchema.create({
  blockSpecs: {
    alert: Alert,
    button: Button,
  },
});

export default function Editor() {
  const editor = useCreateBlockNote({ schema });

  // Give tests a way to get prosemirror instance
  (window as WindowWithProseMirror).ProseMirror = editor?._tiptapEditor;
  // editor.insertBlocks([{
  //   type:""
  // }])
  // TODO: how to customize slashmenu
  return (
    <BlockNoteView editor={editor}>
      <BlockNoteDefaultUI slashMenu={false} />
      <SuggestionMenuController
        getItems={async (query) =>
          filterSuggestionItems(
            [...getDefaultReactSlashMenuItems(editor), insertAlert(editor)],
            query
          )
        }
        // suggestionMenuComponent={MantineSuggestionMenu}
        triggerCharacter="/"
      />
    </BlockNoteView>
  );
}
