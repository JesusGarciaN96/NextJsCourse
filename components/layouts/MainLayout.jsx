import React from 'react';
import Head from 'next/head';

import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

export default function MainLayout({ children, title }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Next project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.main}>{children}</main>
		</div>
	);
}
