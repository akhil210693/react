import React,{useState,useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(()=>{
      fetchItems();
    },[]);
    const [items,setItems]=useState([]);
    const fetchItems=async ()=>{
        const data= await fetch("https://fakestoreapi.com/products");
   
    const items= await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div className="container top">
        <div className="row mt-4 mb-4">
      {items.map(item=>(
          <div className="col-sm-3 mb-5 ">
              <div className="border" >
              <Link to={`/shop/${item.id}`} >   
             <img src={item.image} width="100%" alt="image"/>         
          <h6  key={item.id}>{item.title}</h6>
          </Link> 
          
          </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Shop;
