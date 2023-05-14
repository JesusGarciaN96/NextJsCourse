import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const style = {
	color: '#0070F3',
	textDecoration: 'underline',
};

export default function ActiveLink({ text, href }) {
	const { asPath } = useRouter();

	return (
		<Link href={href}>
			<span style={asPath === href.pathname ? style : null}>{text}</span>
		</Link>
	);
}
