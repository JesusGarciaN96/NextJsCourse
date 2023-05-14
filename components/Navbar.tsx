import React from 'react';

import ActiveLink from './ActiveLink';
import { ROUTES } from '../constants/routes';

import styles from './Navbar.module.css';

const { home, about, contact, pricing } = ROUTES;
const menuItems = [
	{
		text: 'Home',
		href: home,
	},
	{
		text: 'About',
		href: about,
	},
	{
		text: 'Contact',
		href: contact,
	},
	{
		text: 'Pricing',
		href: pricing,
	},
];

export function Navbar() {
	return (
		<nav className={styles['menu-container']}>
			{menuItems.map(({ text, href }) => (
				<ActiveLink key={href} text={text} href={href} />
			))}
		</nav>
	);
}
