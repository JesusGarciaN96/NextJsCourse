import React from 'react';
import Head from 'next/head';

import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

interface Props {
	title: string;
	children: JSX.Element
}

export default function MainLayout({ children, title }: Props): JSX.Element {
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
