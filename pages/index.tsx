import Link from 'next/link';

import MainLayout from '../components/layouts/MainLayout';
import { ROUTES } from '../constants/routes';

const { about, contact } = ROUTES;

export default function Home() {
	return (
		<MainLayout title="Home">
			<h1 className={'title'}>
				Ir a <Link href={about}>About</Link>&nbsp; Ir a{' '}
				<Link href={contact}>Contact</Link>
			</h1>
		</MainLayout>
	);
}
