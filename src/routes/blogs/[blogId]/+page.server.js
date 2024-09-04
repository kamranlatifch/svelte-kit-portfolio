import { error } from '@sveltejs/kit';
export const load = async (serverLoadEvent) => {
	const { fetch, params, url, route } = serverLoadEvent;
	const { blogId } = params;
	if (!blogId) {
		throw error(404, {
			message: 'Oh no! Looks like there is some issue.',
			hint: 'Try a different blog'
		});
	}

	const response = await fetch(`https://dummyjson.com/products/${blogId}`);

	const blog = await response.json();
	return {
	
		blog,
	
	};
};