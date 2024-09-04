
  <script>
    export let id;
    export let title;
    export let image;
    export let publishDate;
    export let description;

    function truncateDescription(desc, maxLength = 150) {
        if (desc.length > maxLength) {
            return desc.slice(0, maxLength) + '...';
        }
        return desc;
    }
    function formatPublishDate(dateString) {
        const date = new Date(dateString);
        return `Published: ${date.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        })}`;
    }
</script>

<a
    href={`/blogs/${id}`} 
    class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200 bg-white dark:bg-slate-950 shadow-lg dark:shadow-slate-800 transition-transform transform hover:scale-105"
>
    <div
         class="relative overflow-hidden rounded-md h-40 mx-auto duration-200"
    >
        <img src={image} alt={title} class="object-cover w-full h-full" />
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl dark:text-white">
        {title}
    </h3>
    <p class="text-sm text-gray-500 dark:text-gray-400">{formatPublishDate(publishDate)}</p>
    <p class="text-base text-gray-700 dark:text-gray-300">
        {truncateDescription(description, 150)}
    </p>
    <div class="flex-1 flex justify-between gap-4 items-end">
        <div
            class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
        >
            <p class="z-4">Read More &rarr;</p>
        </div>
    </div>
</a>
