import React from "react";

const ToDoListItem = (props)=>{
    const items = ['Learn React','Build awesome App']
    return (<span>{props.text}</span>)
}
export default ToDoListItem;