import React from 'react';

import ActiveLink from './ActiveLink';
import { ROUTES } from '../constants/routes';

import styles from './Navbar.module.css';

const { home, about, contact } = ROUTES;

export function Navbar() {
	return (
		<nav className={styles['menu-container']}>
			<ActiveLink text="Home" href={{ pathname: home }} />
			<ActiveLink text="About" href={{ pathname: about }} />
			<ActiveLink text="Contact" href={{ pathname: contact }} />
		</nav>
	);
}
