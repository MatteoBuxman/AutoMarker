<script>
    
    import SubmittedFilesModal from '$lib/components/SubmittedFilesModal.svelte';
    import { slide } from 'svelte/transition'
    import {cubicOut} from 'svelte/easing'
    import {enhance} from '$app/forms'

    export let data;

    let showUploadedFiles = false;
    let buttonDisabled = true;

    function handleFileChoice(e){
        
        if(e.target.files.length !== 0){
            buttonDisabled = false;
        }
        else{
            buttonDisabled = true;
        }
    }

</script>

<div transition:slide={{duration:350, easing: cubicOut}} class="fixed top-0 bottom-0 left-0 right-0 bg-white flex items-center justify-center z-40">
    {#if showUploadedFiles}
        <SubmittedFilesModal files={data.files} on:click={()=> showUploadedFiles = false}/>
    {:else}
    <div class="m-4 px-6 py-4 bg-backgroundgray rounded-lg w-[95%]">
        <div class="flex justify-between items-center">
            <h1 class="font-bold text-xl">{data.name}</h1>
            <h1>Best Attempt: <strong>{data.best_attempt} %</strong></h1>
            <h2><span class="font-bold">{data.max_attempts - data.attempts}</span> attempts remaining</h2>
            <button on:click class="py-2 px-4 bg-lightblue hover:bg-lightbluehover transition-colors rounded text-white font-bold">Exit</button>
        </div>

        <button class= "underline hover:text-lightbluehover transition-colors" on:click={()=> showUploadedFiles = true}>Want to see previous submissions ?</button>

        <div class="w-full h-[1px] bg-backgrounddarkgray my-4 mx-auto"></div>

        <div class="flex flex-col justify-center items-center mx-auto h-[550px] w-full max-w-[1000px] border border-black border-dashed rounded-lg bg-white">
            <img src="upload_icon.svg" alt="Upload Icon" class=" w-[200px]">
            <h1 class="mb-4">Drag and Drop File</h1>
            <h1 class="mb-4 font-bold">OR</h1>
            <form class="flex flex-col" method="post" use:enhance>

                <input on:change={handleFileChoice} accept=".zip" type="file" name="file" class="py-3 px-6 mb-2 bg-backgrounddarkgray hover:bg-backgrounddarkgrayhover transition-colors rounded-lg cursor-pointer"/>
                <button disabled={buttonDisabled} class="col-span-2 bg-darkblue w-[50%] mx-auto text-white font-bold p-2 rounded hover:bg-darkbluehover transition-colors" type="submit">Submit</button>

            </form>
        </div>
    </div>
    {/if}
</div>