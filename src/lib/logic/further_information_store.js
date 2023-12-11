import {writable} from 'svelte/store'

//This store will store the data that should be displayed by clicking one of the trial cards in the carousel
const further_information = writable();

export default further_information;