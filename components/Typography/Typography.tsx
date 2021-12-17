import React from "react";
import cn from "classnames";
import { TypographyProps } from "./Typography.props";
import s from "./Typography.module.css";

export function Typography({
  tag,
  children,
  className,
  ...restProps
}: TypographyProps): JSX.Element {
  switch (tag) {
    case "p":
      return (
        <p className={cn(s.p, className)} {...restProps}>
          {children}
        </p>
      );
    case "span":
      return (
        <span className={cn(s.span, className)} {...restProps}>
          {children}
        </span>
      );
    default:
      return <></>;
  }
}
