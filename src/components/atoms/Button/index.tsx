import type { FC } from "react";
import Icon from "~/components/atoms/Icon";

interface ButtonProps {
  icon?: "discord" | "kofi";
  color: string;
  type: "a" | "button";
  href?: string;
  children: React.ReactNode;
}

const buttonClass =
  "inline-flex cursor-pointer items-center rounded-lg px-3 py-2 md:px-4 md:py:2.5 text-center text-sm font-medium text-white whitespace-nowrap";

const Button: FC<ButtonProps> = ({ icon, color, type, href, children }) => {
  const commonProps = {
    style: { backgroundColor: color },
    className: `${buttonClass} hover:bg-opacity-90`,
  };

  const iconWrapperStyle = {
    display: "inline-flex",
    alignItems: "center",
    marginRight: "0.5rem",
  };

  return type === "a" && href ? (
    <a {...commonProps} target="_blank" href={href}>
      {icon && (
        <span style={iconWrapperStyle}>
          <Icon name={icon} color="#FFFFFF" />
        </span>
      )}
      {children}
    </a>
  ) : (
    <button {...commonProps}>
      {icon && (
        <span style={iconWrapperStyle}>
          <Icon name={icon} color="#FFFFFF" />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
