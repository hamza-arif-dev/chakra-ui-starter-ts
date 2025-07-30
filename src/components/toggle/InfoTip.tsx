import { Toggle, type ToggleProps } from "./Toggle";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IconButton, type IconButtonProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type InfoTipProps = {
  buttonProps?: IconButtonProps | undefined;
} & Partial<ToggleProps>;

export const InfoTip = forwardRef<HTMLDivElement, InfoTipProps>(function InfoTip(props, ref) {
  const { children, buttonProps, ...rest } = props;
  return (
    <Toggle content={children} {...rest} ref={ref}>
      <IconButton variant="ghost" aria-label="info" size="2xs" colorPalette="gray" {...buttonProps}>
        <HiOutlineInformationCircle />
      </IconButton>
    </Toggle>
  );
});
