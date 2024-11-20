import { assertEmpty } from "blocknote-core-ts";
import { ComponentProps } from "blocknote-react-ts";
import { forwardRef } from "react";

import { useShadCNComponentsContext } from "../ShadCNComponentsContext.js";

export const PanelFileInput = forwardRef<
  HTMLInputElement,
  ComponentProps["FilePanel"]["FileInput"]
>((props, ref) => {
  const { className, accept, value, placeholder, onChange, ...rest } = props;

  assertEmpty(rest);

  const ShadCNComponents = useShadCNComponentsContext()!;

  return (
    <ShadCNComponents.Input.Input
      type={"file"}
      className={className}
      ref={ref}
      accept={accept}
      value={value ? value.name : undefined}
      onChange={async (e) => onChange?.(e.target.files![0])}
      placeholder={placeholder}
    />
  );
});
