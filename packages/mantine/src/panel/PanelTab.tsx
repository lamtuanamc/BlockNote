import { assertEmpty } from "blocknote-core-ts";
import { ComponentProps } from "blocknote-react-ts";
import { forwardRef } from "react";

export const PanelTab = forwardRef<
  HTMLDivElement,
  ComponentProps["FilePanel"]["TabPanel"]
>((props, ref) => {
  const { className, children, ...rest } = props;

  assertEmpty(rest);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
});
