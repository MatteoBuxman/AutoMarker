<script>

  import { tweened } from 'svelte/motion';
  import {cubicInOut} from 'svelte/easing';



  export let title;
  export let data; //An array of objects that holds the data for each menu item (title, due date, best mark)
  export let isEnabled;

  let angle = tweened(isEnabled ? 180 : 0, {
      duration: 200,
      easing: cubicInOut,
  });
  
  function toggleMenu(){

    if(isEnabled){
        angle.set(0);
      }else{
        angle.set(180);
      }

      isEnabled = !isEnabled;
  }

</script>

<section class="bg-backgroundgray rounded-lg py-2 px-4 flex flex-col">
    <div class="flex items-center font-bold">
        <h1 >{title}</h1>
        <button on:click={toggleMenu} class="px-1 py-[2px] mx-2 bg-backgrounddarkgray rounded hover:bg-backgroundgray transition-colors"><img class="w-[20px]" src="menucollapsearrow.png" alt="collapse-menu-icon" style="rotate: {$angle}deg;"></button>
    </div>
    {#if isEnabled}
        <div class="p-2">
            {#each data as assignment}
                <div>

                </div>
            {/each}
        </div>
    {/if}
</section>

