/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FC } from "react";
import DiscordIcon from "~/public/images/icons/discord.svg";
import KofiIcon from "~/public/images/icons/kofi.svg";

interface IconProps {
  name: "discord" | "kofi";
  color: string;
}

const icons = {
  discord: DiscordIcon,
  kofi: KofiIcon,
};

const Icon: FC<IconProps> = ({ name, color }) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      style={{ fill: color, width: "24px", height: "24px" }}
      aria-label={`${name} icon`}
    />
  );
};

export default Icon;
