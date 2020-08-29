import React from "react";
import s from './AppHeader.module.css';
import './../../style.css';

const AppHeader = ({toDo,done})=>{
    return (<div className={`${s.appHeader} flex`}>
        <h1>Todo List</h1>
        <h2>{toDo} more to do, {done} done</h2>
    </div>)
}
export default AppHeader

