import React, { CSSProperties, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const style: CSSProperties = {
	color: '#0070F3',
	textDecoration: 'underline',
};

interface Props {
	text: string;
	href: string;
}

export default function ActiveLink({ text, href }: Props): JSX.Element {
	const { asPath } = useRouter();

	return (
		<Link href={href}>
			<span style={asPath === href ? style : undefined}>{text}</span>
		</Link>
	);
}
