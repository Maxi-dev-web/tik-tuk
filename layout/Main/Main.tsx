import React from "react";
import cn from "classnames";
import { MainProps } from "./Main.props";
import s from "./Main.module.css";

export default function Main({ children, className }: MainProps): JSX.Element {
  return <main className={cn(s.main, className)}>{children}</main>;
}
