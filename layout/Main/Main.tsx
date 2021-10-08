import React, { ReactElement } from 'react'
import { MainProps } from './Main.props';
import s from './Main.module.css';

export default function Main({ children }: MainProps): JSX.Element {
	return (
		<main>
			{children}
		</main>
	)
}
