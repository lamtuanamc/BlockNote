import { Dictionary } from "blocknote-core-ts";
import { useBlockNoteContext } from "../editor/BlockNoteContext.js";

export function useDictionary(): Dictionary {
  const ctx = useBlockNoteContext();
  return ctx!.editor!.dictionary;
}
