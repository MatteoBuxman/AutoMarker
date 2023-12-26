<script>
    import { fade } from 'svelte/transition';
    import store from '$lib/logic/further_information_store.js'
</script>

<div class="fixed left-0 right-0 top-0 bottom-0 bg-backgroundgray/[0.7] flex justify-center items-center z-50" transition:fade={{duration:150}}>
    <div class="flex flex-col w-[95%] lg:w-[40%] bg-white rounded p-3 max-h-[800px] overflow-y-scroll">
    <div class="flex justify-between items-center">
        <h1 class="font-bold text-2xl">Trial {$store?.trialNumber || ''}</h1>
        <button on:click={ ()=> store.set() } class="py-2 px-4 bg-lightblue hover:bg-lightbluehover transition-colors rounded text-white font-bold">Exit</button>
    </div>
    <div class="w-[99%] h-[1px] bg-backgrounddarkgray mt-3 mx-auto"></div>

    
        <h2 class="my-2 font-bold text-xl">{$store?.status || ''}</h2>

        {#if $store?.expectedOutput && $store?.actualOutput && $store?.inputSupplied}

        <h1 class="font-bold">Expected Output</h1>
        {#each $store?.expectedOutput as line}
            <h2 class="">{line}</h2>
        {/each}

        <h1 class="font-bold">Actual Output</h1>
        {#each $store?.actualOutput as line}
            <h2 class="">{line}</h2>
        {/each}

        <h1 class="font-bold">Input Supplied</h1>
        {#each $store?.inputSupplied as line}
            <h2 class="">{line}</h2>
        {/each}
             
        {/if}
    </div>
    
</div>