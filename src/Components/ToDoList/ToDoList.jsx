import React from "react";
import ToDoListItem from "./ToDoListItem";
import s from './ToDoList.module.css';
import s_searchPanel from '../SearchPanel/SearchPanel.module.css'

class ToDoList extends React.Component {
    state={
        newItemText:"",
        errors:""
    }
    ref =  React.createRef();
    changeText = (e,clear=false)=>{
        this.setState((state)=>{
            return {
                errors:"",
                newItemText: !clear?(this.ref.current.value) : ''
            }

        })
    }

    addElement = ()=>{
        const label = this.state.newItemText
        if(!label){
            this.setState((state)=>({
                ...state,
                errors:"Text field cannot be empty!"
            }))
            return;
        }
        this.props.addElement(label);

        this.changeText(null,true);
    }
    render() {
        let {todos, ...props} = this.props;
        const {newItemText,errors} = this.state
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
                <div className={s.createItemWrapper}>
                <input
                    onChange={this.changeText}
                    className={s_searchPanel.searchInput}
                    value={newItemText} ref={this.ref}
                    placeholder={"Create new item..."}
                />
                    <button onClick={this.addElement} className={s.btn}>Add item</button>
                </div>
                <div className={s.errors}>
                    <span>{errors}</span>
                </div>

            </>
        )
    }
}

export default ToDoList

