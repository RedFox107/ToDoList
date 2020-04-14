import React from "react";
import s from './SearchPanel.module.css';
const SearchPanel = ({placeholder='',...props})=>{
    return (<div className={s.baseBlock}>
        <input placeholder={placeholder} className={s.searchInput}/>
        <ItemStatusFilter/>
    </div>)
}

const ItemStatusFilter = (props)=>{
    return (
        <div className={s.btnGroup}>
            <button className={s.active}>All</button>
            <button className={""}>Active</button>
            <button className={""}>Done</button>
        </div>
    )
}
export default SearchPanel