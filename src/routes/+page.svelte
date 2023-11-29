<script>
    import CollapsibleAssignmentMenu from "$lib/CollapsibleAssignmentMenu.svelte";
    import automarkdata from  "$lib/automark_home.json";
</script>

<nav class="w-full bg-darkblue px-4 py-2 rounded-b-xl text-white">
    <div class="flex justify-between items-center max-w-[1600px] mx-auto">
        <div class="flex items-center justify-between w-1/4 min-w-[280px]">
            <img src="uct_logo.svg" alt="University logo" class="w-[65px]">
            <h1 class="font-bold text-4xl">Automarker</h1>
        </div>
        <div class="bg-lightblue rounded p-2 hover:bg-lightbluehover cursor-pointer transition-colors">
            <a href="https://amathuba.uct.ac.za">Return to Amathuba</a>
        </div>
    </div>
</nav>

<div class="w-[98%] h-[1px] bg-backgrounddarkgray my-4 mx-auto"></div>

<div class="w-[98%] max-w-[1600px] mx-auto">
    <CollapsibleAssignmentMenu title="Open Assignments" isEnabled={true} data={automarkdata.open_assignments.assignments}/>
</div>