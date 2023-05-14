import React from 'react';
import Link from 'next/link';

import MainLayout from '../components/layouts/MainLayout';
import { ROUTES } from '../constants/routes';

import styles from '../styles/Home.module.css';

const { home, about } = ROUTES;

export default function contact() {
	return (
		<MainLayout title="Contact">
			<h1 className={styles.title}>
				Ir a <Link href={home}>Home</Link>&nbsp; Ir a{' '}
				<Link href={about}>About</Link>
			</h1>
		</MainLayout>
	);
}
