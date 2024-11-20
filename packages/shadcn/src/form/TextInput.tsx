import { assertEmpty } from "blocknote-core-ts";
import { ComponentProps } from "blocknote-react-ts";
import { forwardRef } from "react";

import { useShadCNComponentsContext } from "../ShadCNComponentsContext.js";

export const TextInput = forwardRef<
  HTMLInputElement,
  ComponentProps["Generic"]["Form"]["TextInput"]
>((props, ref) => {
  const {
    className,
    name,
    label,
    icon, // TODO: implement
    value,
    autoFocus,
    placeholder,
    onKeyDown,
    onChange,
    onSubmit,
    ...rest
  } = props;

  assertEmpty(rest);

  const ShadCNComponents = useShadCNComponentsContext()!;

  if (!label) {
    return (
      <ShadCNComponents.Input.Input
        aria-label={name}
        name={name}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onSubmit={onSubmit}
        ref={ref}
      />
    );
  }

  return (
    <div>
      <ShadCNComponents.Label.Label htmlFor={label}>
        {label}
      </ShadCNComponents.Label.Label>
      <ShadCNComponents.Input.Input
        className={className}
        id={label}
        name={name}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
});
