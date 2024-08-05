"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  arrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  arrow,
}) => {
  const locale = usePathname();
  const arrowSign = () => {
    if (locale === "/") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="w-3 h-3 group-hover:translate-x-1 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="w-3 h-3 group-hover:-translate-x-1 transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 4.5L3 12m0 0l7.5 7.5M3 12h18"
          />
        </svg>
      );
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      group
    relative
    
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    hover:opacity-80
    transition
    w-[160px]
    float-right
    
    ${locale === "/" ? "font-Circular-Bold" : "font-helvetica-neue-lt-arabic-75-bol"}
    ${outline ? "bg-white" : "bg-webYellow pt-3 pb-3"}
    ${outline ? "border-black" : "border-webWhite"}
    ${outline ? "text-webBlue" : "text-webBlue"}
    ${small ? " py-4" : "py-2"}
    ${small ? "text-md text-webBlue" : "text-md"}
    ${small ? "font-light" : "font-semibold"}
    ${small ? "border-[0.8px]" : "border-[1px]"}
    `}
    >
      <span className="flex justify-evenly items-center">
        {label}
        {arrow && arrowSign()}
      </span>
    </button>
  );
};

export default Button;
