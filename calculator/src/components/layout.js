import React, { useState } from 'react';
import './layout.css';
import Output from './output';
const Layout=(props)=>{
    let [input,setInput]=useState('0');
    let [result,setResult]=useState('');

    const handleClick=(event)=>{
        const value=event.target.value;
        if(value==="="){
            if(value!=""){
                let res="";
                try{
                    res=eval(input);
                }
                catch(err){
                    setResult("Math Error");
                }
                if(res==="undefined"){
                    setResult("Math Error");
                }
                else{
                    setResult(input+"=")
                    setInput(res)
                }
            }
        }
        else if(value==="C"){
            setResult("")
            setInput('0')
        }
        else if(value==="DEL"){
            let str=input;
            str=str.substr(0,str.length-1);
            setInput(str)
        }
        else if(input=== '0'){
            setInput(value)
        }
        else{
            setInput(input +=value)
        }
    }
    return(
        <div className="row mt-5">
            <div class="offset-sm-4 col-sm-4">
        <div className="frame pb-4">
            <div className="calculator">
            <br></br>
            <Output user={input} answer={result}></Output>
            <img/>
            <div className="keys">
                <div class="row">
                    <div class="offset-sm-2 col-sm-2">
                    <input type="button" value={'C'} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'DEL'} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'%'} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'/'} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="offset-sm-2 col-sm-2">
                    <input type="button" value={'7'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'8'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'9'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'*'} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="offset-sm-2 col-sm-2">
                    <input type="button" value={'4'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'5'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'6'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'-'} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="offset-sm-2 col-sm-2">
                    <input type="button" value={'3'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'2'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'1'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'+'} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="offset-sm-2 col-sm-2">
                    <input type="button" value={'0'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'.'} className="btn btn-primary" onClick={handleClick} ></input>
                    </div>
                    <div class="col-sm-2">
                    <input type="button" value={'='} className="btn btn-warning" onClick={handleClick} ></input>
                    </div>
                </div>
             
            
            </div>
            </div>
            
        </div>
        </div>
        </div>
    )
};
export default Layout;