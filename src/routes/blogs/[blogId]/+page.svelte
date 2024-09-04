<!-- 

<script>
  import BlogCard from '../../../components/BlogCard.svelte';
    export let data;
    console.log("Data is ",data)
    let blog = data.blog;

  </script>
  <a href="/blogs" class="text-underline p-6">Go Back</a>
  <h1 class="p-6 text-2xl font-bold mb-6">Blog Details Page</h1>
  
  <div class="p-6 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-10">
   
      <BlogCard
        id={blog?.id}
        title={blog?.title}
        image={blog?.images[0]}
        publishDate={blog?.meta?.createdAt}
        description={blog?.description}
      />
   
  </div>
   -->


   <script>
    export let data;
    console.log("Data is ", data);
    let blog = data.blog;
  </script>
  
  <a href="/blogs" class="text-underline p-6 text-blue-500 hover:text-blue-700">Go Back</a>
  
  <div class="p-6 mt-4">
    <!-- Blog Title -->
    <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">{blog?.title}</h1>
    
    <!-- Blog Image -->
    <div class="mb-6">
      <img src={blog?.images[0]} alt={blog?.title} class="w-full h-auto rounded-lg shadow-lg" />
    </div>
    
    <!-- Publish Date -->
    <p class="text-sm text-gray-500 mb-4 text-center md:text-left">
      Published: {new Date(blog?.meta?.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </p>
    
    <!-- Blog Description -->
    <div class="prose lg:prose-xl mx-auto md:mx-0">
      <p>{blog?.description}</p>
    </div>
  </div>
  
  <style>
    /* Add custom styles here */
    .text-underline {
      text-decoration: underline;
    }
    
    .text-blue-500 {
      color: #3b82f6;
    }
    
    .text-blue-700 {
      color: #1d4ed8;
    }
    
    .hover\:text-blue-700:hover {
      color: #1d4ed8;
    }
    
    .shadow-lg {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    
    .prose {
      max-width: none;
      font-size: 1.125rem;
    }
    
    .prose p {
      margin-bottom: 1em;
    }
    
    @media (min-width: 640px) {
      .prose {
        font-size: 1.25rem;
      }
    }
    
    @media (min-width: 768px) {
      .prose {
        font-size: 1.375rem;
      }
    }
  </style>
  