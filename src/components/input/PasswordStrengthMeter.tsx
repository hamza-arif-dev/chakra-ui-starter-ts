import { Box, HStack, Stack, type StackProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { getColorPalette } from "./getColorPalette.ts";

export type PasswordStrengthMeterProps = {
  max?: number;
  value: number;
} & StackProps;

export const PasswordStrengthMeter = forwardRef<HTMLDivElement, PasswordStrengthMeterProps>(
  function PasswordStrengthMeter(props, ref) {
    const { max = 4, value, ...rest } = props;

    const percent = (value / max) * 100;
    const { label, colorPalette } = getColorPalette(percent);

    return (
      <Stack align="flex-end" gap="1" ref={ref} {...rest}>
        <HStack width="full" ref={ref} {...rest}>
          {Array.from({ length: max }).map((_, index) => (
            <Box
              key={index}
              height="1"
              flex="1"
              rounded="sm"
              data-selected={index < value ? "" : undefined}
              layerStyle="fill.subtle"
              colorPalette="gray"
              _selected={{
                colorPalette,
                layerStyle: "fill.solid",
              }}
            />
          ))}
        </HStack>
        {label && <HStack textStyle="xs">{label}</HStack>}
      </Stack>
    );
  },
);
