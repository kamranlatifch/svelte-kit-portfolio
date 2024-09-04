<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    export let y;

    export let tabs = [
        { name: "Projects ", link: "#projects" },
        { name: "About me", link: "#about" },
        { name: "Blog", link: "#blogs" },
      
    ];

let isDarkMode = false;

onMount(() => {
  isDarkMode = localStorage.getItem('theme') === 'dark' ||
               (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  updateTheme();
});

function toggleTheme() {
  isDarkMode = !isDarkMode;
  updateTheme();
}

function updateTheme() {
  document.documentElement.classList.toggle('dark', isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}
function navigateTo(link) {
        if (link.startsWith('/')) {
            goto(link); 
        } else {
            goto('/'); 
           
            setTimeout(() => {
                window.location.hash = link; 
            }, 100); 
        }
    }
</script>

<header
class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
        ? (isDarkMode ? "py-4 bg-slate-950 border-violet-950 text-white" : "py-4 bg-white border-gray-200 text-slate-950")
        : (isDarkMode ? "py-6 bg-transparent border-transparent text-white" : "py-6 bg-transparent border-transparent text-slate-950"))}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">KLC</b> <span class="">DEV</span>
    </h1>

    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-violet-400"
                on:click={() => navigateTo(tab.link)}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        
        <!-- <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-violet-600 text-white"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Login</h4>
        </button> -->
        <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Get in touch</h4>
        </button>
      
      <button
  class="p-2 text-purple-800 dark:text-yellow-200"
  on:click={toggleTheme}
>
  {#if isDarkMode}
   
    <i class="fa-regular fa-sun"></i>
  {:else}
  <i class="fa-solid fa-moon"></i>
  {/if}
</button>
    </div>
</header>


  
