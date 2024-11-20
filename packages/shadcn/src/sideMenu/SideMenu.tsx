import { assertEmpty } from "blocknote-core-ts";
import { ComponentProps } from "blocknote-react-ts";
import { forwardRef } from "react";

export const SideMenu = forwardRef<
  HTMLDivElement,
  ComponentProps["SideMenu"]["Root"]
>((props, ref) => {
  const { className, children, ...rest } = props;

  assertEmpty(rest, false);

  return (
    <div className={className} ref={ref} {...rest}>
      {children}
    </div>
  );
});
