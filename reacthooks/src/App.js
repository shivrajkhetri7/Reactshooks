import React,{useState} from 'react';
import './App.css';
import UseStateHook  from "./useStateHook";
import UseStateArray from "./useStateArray";
import UseStateUpdate from "./useStateUpdate";
import TodoList from "./TodoList"
function App() {
  return (
   <>
   <h1>Hooks</h1>
   <UseStateHook/>
   <UseStateArray/>
   <UseStateUpdate></UseStateUpdate>
   <TodoList/>
   </>
  )
}

export default App;
