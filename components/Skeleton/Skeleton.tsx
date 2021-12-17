import React from "react";
import s from "./Skeleton.module.scss";

export function Skeleton(): JSX.Element {
  return <div className={s.skeletonItem}></div>;
}
