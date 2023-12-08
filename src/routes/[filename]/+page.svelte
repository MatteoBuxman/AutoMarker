<script>
  import MarkFeedbackCarousel from "$lib/MarkFeedbackCarousel.svelte";
  export let data;
</script>

<div class="w-[98%] mx-auto rounded-lg p-3 bg-backgroundgray mt-3 font-main">
    <section class="flex items-center justify-between w-11/12 mx-auto">
 <div class="w-1/3 min-w-[400px] max-w-[600px] flex justify-between">
    <h1 class="font-bold text-3xl ">{data.filename}</h1>
    <div class="flex items-center">
      <h2 class="text-lg"><strong>Attempt No.</strong> 6</h2>
    </div>
    
</div>
<button class="py-2 px-4 bg-lightblue hover:bg-lightbluehover transition-colors rounded text-white font-bold">Exit</button>
</section>

<div class="w-[98%] h-[1px] bg-backgrounddarkgray mt-3 mx-auto"></div>

<section class="w-11/12 mx-auto mt-3">
  <MarkFeedbackCarousel number={1} data_arr={[1,2,3,4,5,6,7]}/>
</section>

</div>
