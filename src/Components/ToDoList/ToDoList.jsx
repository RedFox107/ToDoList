import React from "react";
import ToDoListItem from "./ToDoListItem";
import s from './ToDoList.module.css';




const ToDoList = ({todos, ...props}) => {
    return (
        <>
        <ul className={s.toDoList}>
            {todos.map(({id, ...item}) => (
                    <li key={id}>
                        <ToDoListItem
                            {...item}
                            onDeleted={()=> {props.onDelete(id);}}
                            toggleImportant={()=>{props.toggleImportant(id)}}
                            toggleDone={()=>{props.toggleDone(id)}}
                        />
                    </li>
                )
            )
            }
        </ul>
            <button onClick={props.addElement}>Add item</button>
        </>
    )
}
export default ToDoList

