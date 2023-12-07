<script>

  import SubmitNewFile from './SubmitNewFile.svelte';

  import {formatDueDate} from '$lib/formatduedate.js';
  import { tweened } from 'svelte/motion';
  import {cubicInOut} from 'svelte/easing';
  import { slide } from 'svelte/transition';

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

  let buttonIndex = null; //Variable to store the index of the button that was clicked.

  let submitFile = false;

  function toggleSubmitFile(index){
      buttonIndex = index;
      submitFile = !submitFile;
  }

</script>

{#if submitFile}
    <SubmitNewFile on:click={() => submitFile = false} data={data[buttonIndex]}/>
{/if}

<section class="bg-backgroundgray rounded-lg py-4 px-4 m-3 flex flex-col">
    <div class="flex items-center font-bold">
        <h1 >{title}</h1>
        <button on:click={toggleMenu} class="px-1 py-[2px] mx-2 bg-backgrounddarkgray rounded hover:bg-backgroundgray transition-colors"><img class="w-[20px]" src="menucollapsearrow.png" alt="collapse-menu-icon" style="rotate: {$angle}deg;"></button>
    </div>
    {#if isEnabled}
        <div class="p-2 mt-3" transition:slide={{duration: 500}}>
            {#each data as assignment (assignment.index)}

                <div class="grid w-full grid-cols-8 gap-8 grid-rows-1 items-center p-5 bg-white rounded-lg mb-3">
                    <h1 class="font-semibold text-xl col-span-3">{assignment.name}</h1>
                    <h1 class="col-span-2"><strong>Due:</strong> {formatDueDate(assignment.due_date)}</h1>
                    <h1 class="">Best Attempt: <strong>{assignment.best_attempt}%</strong></h1>
                    <button on:click={() => toggleSubmitFile(assignment.index)} class="col-span-2 bg-darkblue w-[50%] mx-auto text-white font-bold p-2 rounded hover:bg-darkbluehover transition-colors">Submit</button>
                </div>
            {/each}
        </div>
    {/if}
</section>

