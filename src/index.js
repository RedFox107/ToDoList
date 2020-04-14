import React from "react";
import ReactDOM from 'react-dom';
import ToDoList from "./Components/ToDoList/ToDoList";
import AppHeader from "./Components/AppHeader/AppHeader";
import SearchPanel from "./Components/SearchPanel/SearchPanel";


const App = (props)=>{
    return (<div>
        <AppHeader/>
        <SearchPanel placeholder={"search..."}/>
        <ToDoList/>
    </div>)
}

ReactDOM.render(<App/>,document.getElementById('root'))