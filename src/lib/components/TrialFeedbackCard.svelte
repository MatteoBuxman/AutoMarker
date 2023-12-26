<script>
    export let trial;
    import store from '$lib/logic/further_information_store.js'
</script>

<div on:click={()=> store.set(trial)} class="w-[97px] h-[97px] bg-white rounded-lg mr-3 p-3 flex flex-col shrink-0 items-center hover:scale-105 transition-transform cursor-pointer">
    <h2 class="font-bold mt-1">Trial {trial.trialNumber}</h2>
    {#if trial.status_bool}
        <img src="tick.svg" alt="success icon" class="w-[38px] mt-1">
    {:else}
        <img src="cross.svg" alt="failure icon" class="w-[30px] mt-1">
    {/if}
</div>