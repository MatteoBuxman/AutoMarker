<script>
    export let files;
</script>

<div class="m-4 px-6 py-4 bg-backgroundgray rounded-lg w-[95%] z-50">

    <div class="flex w-full justify-between items-center">
         <h1 class="font-bold text-2xl ">Uploaded Files</h1>
         <button on:click class="py-2 px-4 bg-lightblue hover:bg-lightbluehover transition-colors rounded text-white font-bold">Exit</button>
    </div>

    <div class="w-full h-[1px] bg-backgrounddarkgray my-3 mx-auto"></div>

    <div class="mt-2">
        {#each files as file, i}
        <h1 class="">{i + 1}. {file}</h1>
        {/each}
    </div>
</div>