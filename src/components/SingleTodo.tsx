import React, { useRef } from 'react';
import { Todo } from './model';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
type Props={
    todo:Todo,
    todos:Todo[],
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo:React.FC<Props>=({todo,todos,setTodos})=>{
    const [edit,setEdit] = React.useState<boolean>(false);
    const [editValue,setEditValue] = React.useState<string>(todo.todo)
    const handleDone=(id:number)=>{
        setTodos(todos.map(todo=>todo.id===id? {...todo,isDone: !todo.isDone}: todo))
    }
    const handleDelete=(id:number)=>{
      setTodos(todos.filter(todo=>todo.id!==id))
    }
    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault()
        setTodos(todos.map(todo=>todo.id===id?{...todo,todo:editValue}:todo))
        setEdit(false)
    }
      React.useEffect(()=>{
         inpRef.current?.focus()
      },[edit])
    const inpRef = React.useRef<HTMLInputElement>(null);

    return(
        <>
          <form onSubmit={(e)=>handleEdit(e,todo.id)} className='myTodos'>
            {
             edit?
                <input className='myinp' ref={inpRef} value={editValue} type="text" onChange={(e)=>setEditValue(e.target.value)}/>
                :
              todo.isDone ?
                <s>{todo.todo}</s> :
                <span>{todo.todo}</span>
            }
            <div className="icons">
                <span onClick={()=>{
                    if(!edit && !todo.isDone){
                         setEdit(!edit)
                    }
                }}><MdModeEdit /></span>
                <span onClick={()=>handleDelete(todo.id)}><MdDelete /></span>
                <span onClick={()=>handleDone(todo.id)}> <FaCheck /></span>
            </div>
          </form>
      
        </>
    )
}
export default SingleTodo