import React,{useState,useEffect} from 'react';
import './App.css';

function Item({match}) {
    useEffect(()=>{
        fetchItem();
        console.log(match);
    },[]);
    const [item,setItem]=useState({});
    const fetchItem=async ()=>{
        const fetchItem=await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item= await fetchItem.json();
        console.log(item);
        setItem(item);
    } ;
  return (
    <div className="container">
        <div className="row mt-4 mb-4">
            <div className="col-sm-4"><img src={item.image} width="200px"/></div>
            <div className="col-sm-8">
            <div className="pt-5">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>Rs {item.price}</p>
            </div>
            </div>
    </div>
    </div>
  );
}

export default Item;
