<script>
  import TrialFeedbackCard from "$lib/components/TrialFeedbackCard.svelte";
  import { fade, slide } from 'svelte/transition'
  import { spring } from 'svelte/motion'

  export let question_feedback;

  let container_width;
  let translate_amount = spring(0, {
      stiffness: 0.02,
      damping: 0.25,
  });

  let show_buttons = true;
  
    const size = question_feedback.trials.length * 105;
    

    $: { if(size > container_width){
        show_buttons = true;
        }else{
        show_buttons = false;
        translate_amount.set(0);
        }
    }

    //Function to handle the scroll of the carousel, and to calculate when there should be no more scroll allowed.
    function translateCarousel(direction){
        

        switch(direction){
            case 'left':
                if($translate_amount === 0 ) break;
                $translate_amount += container_width;
            break;
            case 'right':
                if(false) return;
                $translate_amount -= container_width;
            break;
        }
    }
</script>
<div class="w-full flex items-center" transition:slide={{duration:200}}>


<div class="w-1/12 py-4 min-w-[100px] p-3 flex flex-col z-40 bg-backgroundgray">
    <div class="flex items-center mb-2">
        <h1 class="mr-3 font-bold text-xl">Q{question_feedback.questionNumber}.</h1>
        {#if question_feedback.allTrialsCorrect}
            <img src="tick.svg" alt="success-tick" class="w-[35px]">
            {:else}
            <img src="cross.svg" alt="failure-icon" class="w-[25px]">
        {/if}
    </div>
        <h2 class="">{question_feedback.totalScore} points</h2>
       
</div>

        {#if show_buttons}
            <button on:click={()=> translateCarousel('left')} transition:fade={{duration:150}} class=" mr-1 font-bold text-xl py-5 p-3 bg-backgrounddarkgray/[0.3] hover:bg-backgrounddarkgray/[1] transition-colors  z-40 rounded-r-lg">&#8592;</button>
        {/if}
    
    <div class="flex p-3  items-center overflow-x-hidden" bind:clientWidth={container_width}>
        
        <div class="flex" style="translate: {$translate_amount}px;">

        
        {#each question_feedback.trials as trial (trial.trialNumber)}
            <TrialFeedbackCard {trial}/>
        {/each}
    </div>
    </div>
        {#if show_buttons}
            <button on:click={()=> translateCarousel('right')} transition:fade={{duration:150}} class="ml-1 font-bold text-lg py-5 p-3 bg-backgrounddarkgray/[0.3] hover:bg-backgrounddarkgray/[1] transition-colors  z-40 rounded-l-lg">&#8594;</button>
        {/if}

</div>

<div class="w-[98%] h-[1px] bg-backgrounddarkgray mt-3 mx-auto"></div>


