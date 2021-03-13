import React,{useState} from 'react'

 function UseStateArray() {
     const myBioData =[{
        id:1,Name:"Shivraj",Cource:"BE-Comp"
     },
     {
        id:2,Name:"Aniket",Cource:"BE-Comp"
     },
     {
        id:3,Name:"Ankush",Cource:"BE-Comp"
     },
     {
        id:4,Name:"Mahesh",Cource:"BE-Mech"
     }];
     const [myName,setMyName] = useState(myBioData)
     const clearAll=()=>{
         setMyName([]);

     }
    return (
        <>
        <h1>UseStateArray</h1>
      
        {
        myName.map((Current,index)=>  <h1 className ="useArray" key={index}> Name :{Current.Name}</h1>)
        }
        <button className="btn-clear-All" onClick={clearAll}>Clear All</button>
        <hr/>
        </>
    )
}

export default UseStateArray;