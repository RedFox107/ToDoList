import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = (props)=>{
    const items = ['Learn React','Build awesome App']
    return (
        <ul>
            {items.map((i)=>(<ToDoListItem text={i}/>))}
        </ul>
    )
}
export default ToDoList

