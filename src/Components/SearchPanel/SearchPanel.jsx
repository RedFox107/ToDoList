import React from "react";
import s from './SearchPanel.module.css';

class ItemStatusFilter extends React.PureComponent {

    render() {
        return (
            <div className={s.btnGroup}>
                <button className={s.active}>All</button>
                <button className={""}>Active</button>
                <button className={""}>Done</button>
            </div>
        )
    }
}

const SearchPanel = ({placeholder='',...props})=>{
    return (<div className={s.baseBlock}>
        <input placeholder={placeholder} className={s.searchInput}/>
        <ItemStatusFilter/>
    </div>)
}

export default SearchPanel