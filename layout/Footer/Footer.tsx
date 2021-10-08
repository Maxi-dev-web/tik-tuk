import React, { ReactElement } from 'react'
import NavLink from 'next/link';
import { Typography } from '../../components';
import s from './Footer.module.css';
interface FooterProps {

}

export default function Footer({ }: FooterProps): JSX.Element {
	return (
		<footer className={s.footer}>
			<div className={s.footerInner}>
				<Typography tag="p" className={s.footerReminder}>
					Don’t Forget To Deploy Project To GitHub Pages
				</Typography>
				<Typography tag="p" className={s.rights}>
					© Test Task Limited™, 2020. All rights reserved.
				</Typography>
				<div className={s.footerLinks}>
					<NavLink href="/">
						<a className={s.footerLink}>
							<Typography tag="span">
								Terms Of Service |
							</Typography>
						</a>
					</NavLink>
					<NavLink href="/">
						<a className={s.footerLink}>
							<Typography tag="span">
								{' '}	Privacy Policy
							</Typography>
						</a>
					</NavLink>
				</div>

			</div>
		</footer>
	)
}
