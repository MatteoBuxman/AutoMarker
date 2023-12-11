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
 <div class="w-1/4 min-w-[400px] max-w-[600px] flex justify-between">
    <h1 class="font-bold text-3xl ">{data.filename}</h1>
    <div class="flex items-center">
      <h2 class="text-lg"><strong>Attempt No.</strong> 6</h2>
    </div>
    
</div>
<button class="py-2 px-4 bg-lightblue hover:bg-lightbluehover transition-colors rounded text-white font-bold">Exit</button>
</section>

<div class="w-[98%] h-[1px] bg-backgrounddarkgray mt-3 mx-auto"></div>


<section class="w-11/12 mx-auto mt-3">
    {#each $assignment_data.assignmentResults as question_feedback (question_feedback.questionNumber)}
        <MarkFeedbackCarousel {question_feedback}/>
    {/each}

    {#if !$assignment_data.totalMarks}
        <h1 class="mx-auto font-bold">Loading Next Question</h1>
    {/if}
</section>

</div>
