import React from "react";
import ToDoListItem from "./ToDoListItem";
import s from './ToDoList.module.css';
import * as PropTypes from "prop-types";

class ToDoList extends React.Component {
    state={
        newItemText:""
    }
    ref =  React.createRef();
    changeText = (e,clear=false)=>{
        //debugger

        this.setState((state)=>{
            //let aa = e.currentTarget()
            //debugger
            return {
                ...state,
                newItemText: !clear?(this.ref.current.value) : ''
            }

        })
    }

    addElement = ()=>{
        const label = this.state.newItemText
        this.props.addElement(label);
        this.changeText(null,true);
    }
    render() {
        let {todos, ...props} = this.props;
        const newItemText = this.state.newItemText
        return (
            <>
                <ul className={s.toDoList}>
                    {todos.map(({id, ...item}) => (
                            <li key={id}>
                                <ToDoListItem
                                    {...item}
                                    onDeleted={() => {
                                        props.onDelete(id);
                                    }}
                                    toggleImportant={() => {
                                        props.toggleImportant(id)
                                    }}
                                    toggleDone={() => {
                                        props.toggleDone(id)
                                    }}
                                />
                            </li>
                        )
                    )
                    }
                </ul>
                <input onChange={this.changeText} value={newItemText} ref={this.ref}/>
                <button onClick={this.addElement}>Add item</button>
            </>
        )
    }
}

export default ToDoList

