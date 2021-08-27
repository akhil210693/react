import React,{useEffect, useState}from 'react';
import './App.css';
import Recipe from './Recipe';
const App=()=>{
  const App_Id="caad7876";
  const App_Key="7f31b6ca7d7a4dd10b91b59ab75ee07";

 
  useEffect(()=>{
    getRecipes()
  },[query]);
  const[recipes,setrecipes]=useState([]);
  const[search,setsearch]=useState('');
  const[query,setquery]=useState('chicken');
  const getRecipes= async () => {
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`);
    const data= await response.json();
    setrecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch=e=>{
  setsearch(e.target.value);
  }
  const getSearch=e=>{
    e.preventDefault();
    setquery(search);
    setsearch('');
    }
 return(
   <div className="App">
     <form onSubmit={getSearch}>
       <input type="text" value={search} onChange={updateSearch}/>
       <button type="submit">Search</button>
     </form>
     {recipes.map(recipe=>(
       <Recipe
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}/>
     ))}
   </div>
 );
};

export default App;
