import { writable } from "svelte/store";
import mock_results from '$lib/json/mock_results.json';

let simulated_results = writable({
    assignmentResults: [],
});

//Using closures to properly utilise the asynchronous setTimeout function.
for (let i = 0; i < mock_results.assignmentResults.length; i++) {
    (function (index) {
      setTimeout(() => {
        
        simulated_results.update(curr => {
            return {
              assignmentResults: [
                ...curr.assignmentResults,
                mock_results.assignmentResults[i],
              ]
            }
        })

      }, 3000 * (index + 1));
    })(i);

    setTimeout(()=> {
      simulated_results.update(curr => {
        return {
          assignmentResults: [
            ...curr.assignmentResults
          ],
          totalMarks: mock_results.totalMarks,
        }
    })
    }, mock_results.assignmentResults.length * 3000)
  }

  export default simulated_results ;
  