// import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
export const load = ({ cookies, url }) => {
	
	if (!cookies.get('username')) {
		throw redirect(307, `/auth/login?redirectTo=${url.pathname}`);
		// throw redirect(307, `/auth/login`);

	}
	const newAPIKey = 'YOUR_API_KEY';

	const news = [
		{ id: 1, title: 'News 1' },
		{ id: 2, title: 'News 2' },
		{ id: 3, title: 'News 3' }
	];

	return { news };
};