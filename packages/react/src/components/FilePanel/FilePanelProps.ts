import {
  DefaultInlineContentSchema,
  DefaultStyleSchema,
  FilePanelState,
  InlineContentSchema,
  StyleSchema,
  UiElementPosition,
} from "blocknote-core-ts";

export type FilePanelProps<
  I extends InlineContentSchema = DefaultInlineContentSchema,
  S extends StyleSchema = DefaultStyleSchema
> = Omit<FilePanelState<I, S>, keyof UiElementPosition>;
