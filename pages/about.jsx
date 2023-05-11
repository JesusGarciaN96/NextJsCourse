import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function about() {
	return (
		<div>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Ir a <Link href="/">Home</Link>
				</h1>
			</main>
		</div>
	);
}
