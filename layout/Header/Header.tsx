import React from "react";
import NavLink from "next/link";
import { Typography } from "../../components";
import Image from "next/image";

import iconLogo from "../../assets/images/homePage/tik-tok.png";

import s from "./Header.module.css";
import { HeaderProps } from "./Header.props";

export default function Header({}: HeaderProps): JSX.Element {
  return (
    <header className={s.header}>
      <div className={s.headerInner}>
        <NavLink href="/">
          <a className={s.logo}>
            <Image src={iconLogo} alt="TikTuk" width="60" height="60" />
            <Typography tag="p" className={s.logoText}>
              TikTuk :{")"}
            </Typography>
          </a>
        </NavLink>
      </div>
    </header>
  );
}
