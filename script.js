import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response)=> {
    console.log(response.data);
  })

// setTimeout(() => {
//     console.log('sumit');
// }, 1000);