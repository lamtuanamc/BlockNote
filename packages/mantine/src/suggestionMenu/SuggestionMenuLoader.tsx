import { Loader as MantineLoader } from "@mantine/core";

import { assertEmpty } from "blocknote-core-ts";
import { ComponentProps } from "blocknote-react-ts";
import { forwardRef } from "react";

export const SuggestionMenuLoader = forwardRef<
  HTMLDivElement,
  ComponentProps["SuggestionMenu"]["Loader"]
>((props, ref) => {
  const {
    className,
    children, // unused, using "dots" instead
    ...rest
  } = props;

  assertEmpty(rest);

  return <MantineLoader className={className} type="dots" ref={ref} />;
});
