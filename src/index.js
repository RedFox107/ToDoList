import React from "react";
import ReactDOM from 'react-dom';
import ToDoList from "./Components/ToDoList/ToDoList";
import AppHeader from "./Components/AppHeader/AppHeader";
import SearchPanel from "./Components/SearchPanel/SearchPanel";
import './style.css';

const App = (props)=>{
    const ToDoData = [
        {
            id:1,
            label: 'Learn React',
            important:false,
        },
        {
            id:2,
            label: 'Build awesome App',
            important:true
        },
    ]
    return (<div className={"body"}>
        <AppHeader/>
        <SearchPanel placeholder={"search..."}/>
        <ToDoList todos={ToDoData}/>
    </div>)
}
ReactDOM.render(<App/>,document.getElementById('root'))