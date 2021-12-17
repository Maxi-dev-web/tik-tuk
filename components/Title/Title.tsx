import React from "react";
import cn from "classnames";
import { TitleProps } from "./Title.props";
import s from "./Title.module.css";

export function Title({
  tag,
  children,
  className,
  ...restProps
}: TitleProps): JSX.Element {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(s.title, className)} {...restProps}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(s.title, className)} {...restProps}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(s.title, className)} {...restProps}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn(s.title, className)} {...restProps}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
}
