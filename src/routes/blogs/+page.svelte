

<script>
    import BlogCard from '../../components/BlogCard.svelte';
  
    export let data;
    let blogs = data.blogs.products;
  </script>
  
  <h1 class="p-6 text-2xl font-bold mb-6">Blog Posts</h1>
  
  <div class="p-6 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-10">
    {#each blogs as blog}
      <BlogCard
        id={blog.id}
        title={blog.title}
        image={blog.images[0]}
        publishDate={blog.meta?.createdAt}
        description={blog.description}
      />
    {/each}
  </div>
  