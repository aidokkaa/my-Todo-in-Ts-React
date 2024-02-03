import React from "react";
interface Props  {
   inpState:string,
   setInpState: React.Dispatch<React.SetStateAction<string>>,
   handleAdd:(e:React.FormEvent)=>void
}
const InputFile:React.FC<Props>=({inpState,setInpState,handleAdd})=>{
    return(
        <>
       <form className="input" onSubmit={handleAdd}>
         <input value={inpState}  onChange={(e)=>setInpState(e.target.value)} type="input" className="inputbox" placeholder="Enter a task"/>
         <button className="inp-submit" type="submit">Go</button>
       </form>
        </>
    )
}
export default InputFile