import { Button as MantineButton } from "@mantine/core";

import { assertEmpty } from "blocknote-core-ts";
import { ComponentProps } from "blocknote-react-ts";
import { forwardRef } from "react";

export const PanelButton = forwardRef<
  HTMLButtonElement,
  ComponentProps["FilePanel"]["Button"]
>((props, ref) => {
  const { className, children, onClick, label, ...rest } = props;

  assertEmpty(rest);

  return (
    <MantineButton
      size={"xs"}
      aria-label={label}
      className={className}
      ref={ref}
      onClick={onClick}
      {...rest}>
      {children}
    </MantineButton>
  );
});
