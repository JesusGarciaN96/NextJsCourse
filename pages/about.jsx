import Link from 'next/link';

import MainLayout from '../components/layouts/MainLayout';
import { ROUTES } from '../constants/routes';

const { home, contact } = ROUTES;

export default function about() {
	return (
		<MainLayout title="About">
			<h1 className={'title'}>
				Ir a <Link href={home}>Home</Link>&nbsp; Ir a{' '}
				<Link href={contact}>Contact</Link>
			</h1>
		</MainLayout>
	);
}
