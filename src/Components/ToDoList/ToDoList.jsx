import React from "react";
import ToDoListItem from "./ToDoListItem";
import s from './ToDoList.module.css';
import s_searchPanel from '../SearchPanel/SearchPanel.module.css'

class ToDoList extends React.Component {
    state = {
        newItemText: "",
        errors: ""
    }
    ref = React.createRef();
    changeText = (e, clear = false) => {

        this.setState(() => {
            return {
                errors: "",
                newItemText: !clear ? (this.ref.current.value) : ''
            }

        })
    }

    addElement = () => {
        const label = this.state.newItemText
        if (!label) {
            this.setState((state) => ({
                ...state,
                errors: "Text field cannot be empty!"
            }))
            return;
        }
        this.props.addElement(label);

        this.changeText(null, true);
    }

    render() {
        let {todos, ...props} = this.props;
        const {newItemText, errors} = this.state
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
                <CreateItem newItemText={newItemText} errors={errors} ref={this.ref} changeText={this.changeText} addElement={this.addElement}/>
            </>
        )
    }
}

const CreateItem = React.forwardRef(({newItemText, errors,changeText,addElement},ref) => {
    return <>
        <div className={s.createItemWrapper}>
            <input
                onChange={changeText}
                className={s_searchPanel.searchInput}
                value={newItemText} ref={ref}
                placeholder={"Create new item..."}
            />
            <button onClick={addElement} className={s.btn}>Add item</button>
        </div>
        <div className={s.errors}>
            <span>{errors}</span>
        </div>
    </>
})

export default ToDoList

