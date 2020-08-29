import React from "react";
import s from './ToDoList.module.css';

class ToDoListItem extends React.PureComponent {
    setImportant = () => {
        this.props.toggleImportant()
    }
    deleteElement = () => {
        this.props.onDeleted();
    }
    toggleDone = () => {
        this.props.toggleDone();
    }

    render() {
        const {label, done, important} = this.props;

        return (
            <div className={s.toDoListItem}>
            <span
                className={`${s.toDoListItemLabel}  ${important && s.important} ${done && s.done}`}
                onClick={this.toggleDone}
            >{label}</span>
                <div className={s.btnWrap}>
                    <button className={`${s.excBtn} ${s.btn}`} onClick={this.setImportant}>
                        <i className={"fa fa-exclamation"}/>
                    </button>
                    <button className={`${s.trashBtn} ${s.btn}`} onClick={this.deleteElement}>
                        <i className={"fa fa-trash-o"}/>
                    </button>
                </div>

            </div>
        )
    }
}

ToDoListItem.defaultProps = {important: false}
export default ToDoListItem;