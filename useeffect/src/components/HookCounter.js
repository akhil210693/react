import React,{useState,useEffect} from 'react';

function HookCounter(props) {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        document.title=`Clicked ${count}times`
    });
    return (
        <div>
             {/*<button onClick={()=>setCount(count+1)}>count{count}</button>*/}
             <button onClick={increment}>count{count}</button>
        </div>
    );
}

export default HookCounter;