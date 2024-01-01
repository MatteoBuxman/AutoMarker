<script>
  import MarkFeedbackCarousel from "$lib/components/MarkFeedbackCarousel.svelte";
  import FurtherInformation from '$lib/components/FurtherInformation.svelte';
  import assignment_data  from '$lib/logic/simulated_results.js';
  import store from '$lib/logic/further_information_store.js'
  export let data;
  
</script>

{#if $store}
    <FurtherInformation/>
{/if}

<div class="w-[98%] mx-auto rounded-lg p-3 bg-backgroundgray mt-3 font-main">
    <section class="flex items-center justify-between w-11/12 mx-auto">
 <div class="w-1/2 min-w-[500px] max-w-[600px] flex justify-between items-center">
    <h1 class="font-bold text-3xl ">{data.filename}</h1>
   
      <h2 class="text-lg mr-3"><strong>Attempt No.</strong> 6</h2>
    
    
</div>
{#if $assignment_data.totalMarks}
    <h2 class="text-lg font-bold hidden md:block"> {$assignment_data.totalMarks} % </h2>
    {:else}
    <h2 class="font-bold text-lg hidden md:block">Marking Project</h2>
{/if}
    <a href="/" class="py-2 px-4 bg-lightblue hover:bg-lightbluehover transition-colors rounded text-white font-bold">Exit</a>
</section>

<div class="w-[98%] h-[1px] bg-backgrounddarkgray mt-3 mx-auto"></div>


<section class="w-11/12 mx-auto mt-3">
    {#each $assignment_data.assignmentResults as question_feedback (question_feedback.questionNumber)}
        <MarkFeedbackCarousel {question_feedback}/>
    {/each}

    {#if !$assignment_data.totalMarks}
        <img src="/loading.svg" alt="loading-icon" class="mx-auto">
    {/if}
</section>

</div>
