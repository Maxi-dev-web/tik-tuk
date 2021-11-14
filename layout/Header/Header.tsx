import React from 'react'
import NavLink from 'next/link';
import { Typography } from '../../components';

import IconLogo from './Logo.svg';

import s from './Header.module.css';
import { HeaderProps } from './Header.props';


export default function Header({ }: HeaderProps): JSX.Element {
	return (
		<header className={s.header}>
			<div className={s.headerInner}>
				<NavLink href="/">
					<a className={s.logo}>
						<IconLogo /><Typography tag="p" className={s.logoText}>Tik Tuk</Typography>
					</a>
				</NavLink>
			</div>
		</header>
	)
}
