import React from 'react';
import Link from 'next/link';

import MainLayout from '../../components/layouts/MainLayout';
import { ROUTES } from '../../constants/routes';

const { home, about, contact } = ROUTES;

export default function Pricing() {
	return (
		<MainLayout title="Pricing">
			<h1 className={'title'}>
				Ir a <Link href={about}>About</Link>&nbsp; Ir a{' '}
				<Link href={contact}>Contact</Link>
				<Link href={home}>Home</Link>
			</h1>
		</MainLayout>
	);
}
