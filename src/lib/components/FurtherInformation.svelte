<script>
    import {fade} from 'svelte/transition';
    import store from '$lib/logic/further_information_store.js'
    import { onDestroy } from 'svelte';
</script>

<div class="fixed left-0 right-0 top-0 bottom-0 bg-backgroundgray/[0.5] flex justify-center items-center z-50" transition:fade={{duration:150}}>
    <div class="w-full lg:w-[60%] bg-white rounded-lg">
        <h1>{$store?.trialNumber || ''}</h1>
        <h2>{$store?.status || ''}</h2>
        <button on:click={()=> store.set()}>Exit</button>
    </div>
</div>