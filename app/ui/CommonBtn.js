"use client";

import Link from "next/link";

export default function CommonBtn({
  variant = "primary",
  size = "md",
  fullWidth,
  isLoading,
  rightIcon,
  disabled,
  className = "",
  children,
  href,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-10 py-4 text-base font-semibold",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: "bg-primary_color text-white hover:bg-hardprimary",
    soft: "bg-softprimary text-black_main hover:bg-primary_color hover:text-white",
    secondary: "bg-secondary_color text-white hover:bg-black_main",
    outline:
      "border border-primary_color text-primary_color hover:bg-primary_color hover:text-white",
    ghost: "text-primary_color hover:bg-softprimary",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";
  const fullWidthClass = fullWidth ? "w-full" : "";

  const finalClass = `
    ${base}
    ${sizes[size]}
    ${variants[variant]}
    ${fullWidthClass}
    ${disabled || isLoading ? disabledStyles : ""}
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>

      {!isLoading && rightIcon && (
        <span className="text-xl flex items-center">{rightIcon}</span>
      )}

      {isLoading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={finalClass} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={finalClass} disabled={disabled || isLoading} {...rest}>
      {content}
    </button>
  );
}
