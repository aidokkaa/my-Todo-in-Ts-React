import React from 'react';
import InputFile from './components/InputFile';
import './App.css';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App:React.FC=()=> {
  const [inpState,setInpState] = React.useState<string>("")
  const [todos,setTodos]=React.useState<Todo[]>([])
  console.log(todos)
  function handleAdd(e:React.FormEvent){
    e.preventDefault()
    if(inpState){
      setTodos([...todos,{id:Date.now(),todo:inpState,isDone:false}])
      setInpState("")
    }
  }
  return (
    <div className="App">
       <div className="myTodo">
        <h2>My Todos</h2>
       </div>
       <InputFile  handleAdd = {handleAdd} inpState = {inpState} setInpState = {setInpState}></InputFile>
       <TodoList todos = {todos} setTodos = {setTodos}></TodoList>
    </div>
  );
}

export default App;
