import React from "react";
import ToDoListItem from "./ToDoListItem";
import s from './ToDoList.module.css';




const ToDoList = ({todos, ...props}) => {
    return (
        <ul className={s.toDoList}>
            {todos.map(({id, ...item}) => (
                    <li key={id}>
                        <ToDoListItem {...item}/>
                    </li>
                )
            )
            }
        </ul>
    )
}
export default ToDoList

