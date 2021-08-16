import React from 'react';
import './Todo.css';



const TodoList=({todovalues, deleteHandler})=>{
    return(
        <React.Fragment>

          
    {todovalues.map((tod,index)=><div key={index}>

    <h1> <li>{tod} <button onClick={()=>deleteHandler(index)}>Delete</button> </li>  </h1>
    </div> )}
        </React.Fragment>
    )
   
}

export default TodoList;
