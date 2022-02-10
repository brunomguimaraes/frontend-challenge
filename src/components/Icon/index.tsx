import { ReactComponent as chevron } from "assets/chevron.svg";
import { ReactComponent as guest } from "assets/guest.svg";
import { ReactComponent as bath } from "assets/bath.svg";
import { ReactComponent as pool } from "assets/pool.svg";
import { ReactComponent as rooms } from "assets/rooms.svg";
import { ReactComponent as arrow } from "assets/arrow.svg";
import { ReactComponent as arrowDown } from "assets/arrow-down.svg";

import styled from "styled-components/macro";

type IconSize = "sm" | "md" | "default";

export interface IconProps {
  name: keyof typeof iconOptions;
  color?: string;
  opacity?: number;
  size?: IconSize;
  inverted?: boolean;
}

const iconOptions = {
  chevron,
  bath,
  guest,
  pool,
  rooms,
  arrow,
  arrowDown,
};

export const Icon = ({
  name,
  color,
  opacity,
  size = "default",
  inverted,
}: IconProps) => {
  const StyledIcon = styled(iconOptions[name])`
    fill: ${color};
    opacity: ${opacity};

    ${inverted &&
    `
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
  `}

    ${size === "md" &&
    `
    width: 9px;
  `}

  ${size === "sm" &&
    `
    width: 6.75px;
  `}
  `;

  return <StyledIcon />;
};
