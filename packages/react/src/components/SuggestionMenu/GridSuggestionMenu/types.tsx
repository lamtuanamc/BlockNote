import { DefaultGridSuggestionItem } from "blocknote-core-ts";

import { SuggestionMenuProps } from "../types.js";

export type DefaultReactGridSuggestionItem = DefaultGridSuggestionItem & {
  icon?: JSX.Element;
};

export type GridSuggestionMenuProps<T> = SuggestionMenuProps<T> & {
  columns: number;
};
