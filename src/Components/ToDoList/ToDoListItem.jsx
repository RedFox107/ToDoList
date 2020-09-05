import React from "react";
import s from './ToDoList.module.css';

class ToDoListItem extends React.PureComponent {
    state = {
        isRefactorNow:false,
        itemText:this.props.label
    }
    setImportant = () => {
        this.props.toggleImportant()
    }
    deleteElement = () => {
        this.props.onDeleted();
    }
    toggleDone = () => {
        this.props.toggleDone();
    }
    toggleRefactorMode = ()=>{
        this.setState(({isRefactorNow})=>({
            isRefactorNow:!isRefactorNow
        }))
    }
    refactorItem = (e)=>{
        const val = e.target.value
        this.setState(()=>({
            itemText:val
        }))
    }
    onRefEnd = ()=>{
        this.props.onRefactor(this.state.itemText)
        this.toggleRefactorMode();
    }
    onEnterKeyPush = ({key})=>{
        if (key==="Enter")
            this.onRefEnd()
    }

    render() {
        const {label, done, important} = this.props;
        const {isRefactorNow} = this.state;

        return (
            <div className={s.toDoListItem}>
                {(isRefactorNow)
                    ?
                    <input
                        onKeyDown={this.onEnterKeyPush}
                        onChange={this.refactorItem}
                        value={this.state.itemText}
                        className={`${s.toDoListItemInput} ${s.toDoListItemLabel} `} autoFocus={true}/>
                    :
                    <span
                        className={`${s.toDoListItemLabel}  ${important && s.important} ${done && s.done}`}
                        onClick={this.toggleDone}
                    >{label}</span>
                }
                <div className={s.btnWrap}>
                    <button className={`${s.refactorBtn} ${s.btn} ${isRefactorNow&&s.refactorBtnActive}`}
                            onClick={(isRefactorNow)?this.onRefEnd:this.toggleRefactorMode}
                    >
                        <i className={isRefactorNow?"fa fa-times":"fa fa-pencil"} aria-hidden="true"/>
                    </button>
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