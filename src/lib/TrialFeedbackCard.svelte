<script>
    export let test;

    function explode(){

    }
</script>

<div on:click={explode} class="w-[97px] h-[97px] bg-white rounded-lg mx-3 p-3 flex flex-col shrink-0 items-center hover:scale-105 transition-transform cursor-pointer">
    <h2 class="font-bold">Trial {test}</h2>
    <img src="tick.svg" alt="success.svg" class="w-[50px] mt-1">
</div>