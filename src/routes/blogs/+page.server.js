export const load = async (serverLoadEvent) => {
	console.log('Load Function is called in Server page.js');
	const { fetch } = serverLoadEvent;
	const response = await fetch('https://dummyjson.com/products');
	const blogs = await response.json();

	return {
	
		blogs
	};
};