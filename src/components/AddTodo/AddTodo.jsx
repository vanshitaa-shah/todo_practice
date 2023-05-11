import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodos } from "../../store/todoSlice";

const AddTodo=()=>{
    const [text,setText]=useState('');
    const dispatch=useDispatch();
    const submit=()=>{
        if(text.length>0){
            // dispatch(addTodo({id: nanoid(),todo:text,completed:false}))
            const items=text.split(",");

    // first way 100 items 100 dispatch

            // items.forEach((item)=>{
            //     dispatch(addTodo({id:nanoid(),todo:item,completed:false}))
            // })

    // Second way addMany method 
            dispatch(addTodos(
                items.map(item=>({id:nanoid(),text:item,completed:false}))
            ))

        }
    }
    return(
        <div className="add-todo">
            <p>To add multiple items write them comma separated</p>
            <p>   
                <i>eg: Eggs, Bread, Ham, Cheese</i>
            </p>
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button onClick={submit}>Add Todo</button>
        </div>
    )
}


export default AddTodo;