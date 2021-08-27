import React,{useState} from 'react';

const HookCountcomp = () => {

    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    return (
        <div>
            {/*<button onClick={()=>setCount(count+1)}>count{count}</button>*/}
            <button onClick={increment}>count{count}</button>
        </div>
    );
};

export default HookCountcomp;