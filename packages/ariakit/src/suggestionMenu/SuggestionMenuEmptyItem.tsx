import { assertEmpty, mergeCSSClasses } from "blocknote-core-ts";
import { ComponentProps } from "blocknote-react-ts";
import { forwardRef } from "react";

export const SuggestionMenuEmptyItem = forwardRef<
  HTMLDivElement,
  ComponentProps["SuggestionMenu"]["EmptyItem"]
>((props, ref) => {
  const { className, children, ...rest } = props;

  assertEmpty(rest);

  return (
    <div
      className={mergeCSSClasses("bn-ak-menu-item", className || "")}
      ref={ref}>
      <div className="bn-ak-suggestion-menu-item-label">{children}</div>
    </div>
  );
});
