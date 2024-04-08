import React from "react";

const sizes = {
  s: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  md: "text-[64px] font-bold md:text-5xl",
  xs: "text-2xl font-bold md:text-[22px]",
  lg: "text-[80px] font-bold md:text-5xl",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
