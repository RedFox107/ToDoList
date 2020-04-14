import React from "react";
import s from './ToDoList.module.css';
const ToDoListItem = ({id,important = false,label,...props})=>{
    return (
        <span className={`${s.toDoListItem} ${important && s.important}`}>
            <span className={s.toDoListItemLabel}>{label}</span>
            <button className={`${s.excBtn} ${s.btn}`}>
                <i className={"fa fa-exclamation"}/>
            </button>
            <button className={`${s.trashBtn} ${s.btn}`}>
                <i className={"fa fa-trash-o"}/>
            </button>
        </span>
    )
}
export default ToDoListItem;