import React from "react";
import s from './ToDoList.module.css';
import * as PropTypes from "prop-types";

class ToDoListItem extends React.PureComponent {
    setImportant = ()=>{
        this.props.toggleImportant()
    }
    deleteElement = ()=>{
        this.props.onDeleted();
    }
    toggleDone = ()=>{
        this.props.toggleDone();
    }
    render() {
        const {id,label,done,important, ...props} = this.props;

        return (
            <span className={s.toDoListItem}>
            <span
                className={`${s.toDoListItemLabel}  ${important && s.important} ${done && s.done}`}
                onClick={this.toggleDone}
            >{label}</span>
            <button className={`${s.excBtn} ${s.btn}`} onClick={this.setImportant} >
                <i className={"fa fa-exclamation"}/>
            </button>
            <button className={`${s.trashBtn} ${s.btn}`} onClick={this.deleteElement}>
                <i className={"fa fa-trash-o"}/>
            </button>
        </span>
        )
    }
}

ToDoListItem.defaultProps = {important: false}
export default ToDoListItem;