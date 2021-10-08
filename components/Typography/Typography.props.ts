import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TypographyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	tag: string;
}