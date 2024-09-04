export const load = async (serverLoadEvent) => {
	console.log('Load Function is called in Server page.js');
	const { fetch } = serverLoadEvent;
	const responseBlogs = await fetch('https://dummyjson.com/products?limit=3');
	const projectsResponse = await fetch('https://dummyjson.com/products?limit=3');
	const userResponse=await fetch('https://dummyjson.com/users/1')


	const blogs = await responseBlogs.json();
	const projects= await projectsResponse.json()
	const user=await userResponse.json()

	return {
		blogs,
		projects,
		user
	};
};