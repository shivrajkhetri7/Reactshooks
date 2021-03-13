import React,{useState} from 'react';

const UseStateHook =()=>{

    let [count,setCountHere] = useState('shivraj')
    const myFunction=()=>{
        setCountHere("Khetri");
        if (count != "shivraj")
        {
            setCountHere("shivraj")
        }
    }
  
    return(
      
        <>
        <hr/>
        <h1>useStateHook</h1>
        <h1>{count}</h1>
        <button className="btn" onClick={myFunction}>Click Me</button>
        <hr/>
        </>
    )

}

export default UseStateHook;