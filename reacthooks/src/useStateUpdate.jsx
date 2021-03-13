import React,{useState} from 'react'

 function UseStateUpdate() {
     const [data, setdata] = useState({
         name:"shivraj",age:21,course:"BE-computer"
     })
     const updateData=()=>{
         setdata({...data,name:"Shivraj Ramesh Khetri"})

     }
    return (
        <>

         <h1>UseStateUpadate</h1>
         <h3  className ="useArray">{data.name} and My Age is {data.age}  my Proffession is {data.course}</h3>
         <button className="btn-clear-All" onClick={updateData}>Update</button>
        <hr/>
        </>
    )
}

export default UseStateUpdate;