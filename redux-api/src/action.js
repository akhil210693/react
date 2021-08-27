

     
  // export const addTodo = ()  => ({

  //           type: "ADD_TODO",
  //           id: 7+3,
            
  // }   )   


  export const addTodo =()=>(dispatch)=>{

    let url= "https://facebook.github.io/react-native/movies.json"
let result =fetch(url).then((data)=>{
  data.json().then((dataJson)=>{
   
    return dispatch({
            type: "ADD_TODO",
            id: dataJson,
    })

  })
})

  }