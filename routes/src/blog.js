import React,{useState,useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Blog() {
    useEffect(()=>{
      fetchItems();
    },[]);
    const [items,setItems]=useState([]);
    const fetchItems=async ()=>{
        const data= await fetch("https://jsonplaceholder.typicode.com/todos");
   
    const items= await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div className="container">
        <div className="row mt-4 mb-4">
      {items.map(item=>(
          <div className="col-sm-3 mb-5 ">
              <div className="border" >
              
                      
          <h6  key={item.id}>{item.title}</h6>
        
          
          </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Blog;
