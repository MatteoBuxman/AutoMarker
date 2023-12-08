<script>
  import TrialFeedbackCard from "./TrialFeedbackCard.svelte";
  import {fade} from 'svelte/transition'
  import { spring } from 'svelte/motion'

  export let data_arr;
  export let number;
  export let final_mark;

  let container_width;
  let translate_amount = spring(0, {
      stiffness: 0.02,
      damping: 0.15,
  });

  let show_buttons = true;
  

  
    const size = data_arr.length * 105;
    

    $: { if(size > container_width){
        show_buttons = true;
        }else{
        show_buttons = false;
        translate_amount.set(0);
        }
    }
</script>
<div class="w-full flex items-center">


<div class="w-1/12 py-4 min-w-[100px] p-3 flex flex-col z-50 bg-backgroundgray">
    <div class="flex items-center mb-2">
        <h1 class="mr-3 font-bold text-xl">Q1</h1>
        <img src="tick.svg" alt="success-tick" class="w-[38px]">
    </div>
    <h2><strong>{final_mark || '...'}</strong> points</h2>
</div>


    {#if show_buttons}
    <button on:click={()=> $translate_amount += container_width} transition:fade={{duration:150}} class=" mr-1 font-bold text-xl py-5 p-3 bg-backgrounddarkgray/[0.3] hover:bg-backgrounddarkgray/[1] transition-colors  z-50 rounded-r-lg">&#8592;</button>
{/if}
    <div class="flex p-3  items-center overflow-x-hidden relative" bind:clientWidth={container_width} on:resize={handle_resize}>

        
        <div class="flex" style="translate: {$translate_amount}px;">

        
        {#each data_arr as test}
            <TrialFeedbackCard {test}/>
        {/each}
    </div>
    
    </div>
    {#if show_buttons}
    <button on:click={()=> $translate_amount -= container_width} transition:fade={{duration:150}} class="ml-1 font-bold text-lg py-5 p-3 bg-backgrounddarkgray/[0.3] hover:bg-backgrounddarkgray/[1] transition-colors  z-50 rounded-l-lg">&#8594;</button>
{/if}

</div>

<div class="w-[98%] h-[1px] bg-backgrounddarkgray mt-3 mx-auto"></div>


