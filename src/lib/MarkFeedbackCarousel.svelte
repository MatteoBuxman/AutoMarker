<script>
  import TrialFeedbackCard from "./TrialFeedbackCard.svelte";

  export let trial_data;

  let mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<div class="w-full flex items-center overflow-x-scroll">
    <div class="w-1/12 min-w-[100px] p-3 flex flex-col">
        <div class="flex items-center mb-2">
            <h1 class="mr-3 font-bold text-xl">Q1</h1>
            <img src="tick.svg" alt="success-tick" class="w-[38px]">
        </div>
        <h2><strong>25</strong> points</h2>
    </div>
    <div class="w-11/12 flex p-3 min-w-[600px]">
        {#each mock as test}
            <TrialFeedbackCard {test}/>
        {/each}
    </div>
</div>

<div class="w-[98%] h-[1px] bg-backgrounddarkgray mt-3 mx-auto"></div>


