import React,{useState} from 'react'

export default function TodoList() {
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
     const removeList=(id)=>{
       let newArray = myName.filter((curr)=>{
            return curr.id !==id    
       })
       setMyName(newArray)

     }
    return (
        <>
        <h1>TODO LIST</h1>
      
        {
        myName.map((Current,index)=>{
            return(
                <>
                <h1 className ="useArray" key={Current.id}> Name :{Current.Name}
                <button className="btn-remove" onClick={()=>removeList(Current.id)}>remove</button></h1>
                
                </>
            )
        } )
        }
        <button className="btn-clear-All" onClick={clearAll}>Clear All</button>
        <hr/>
        </>
    )
}
