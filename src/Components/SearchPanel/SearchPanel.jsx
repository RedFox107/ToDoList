import React from "react";
import s from './SearchPanel.module.css';

class ItemStatusFilter extends React.PureComponent {
    state = {
        activeFilter:0
    }
    buttons = [
        {label:'All',name:"all",id:0},
        {label:'Active',name:"active",id:1},
        {label:'Done',name:"done",id:2},
    ]
    setFilter = (e)=>{
        this.props.setButtonFilter(e.target.name)
    }
    render() {
        const {active} = this.state,
            {activeButton} = this.props;
        return (
            <div className={s.btnGroup}>
                {this.buttons.map((e)=>(
                    <button
                        name={e.name}
                        key={e.id}
                        className={(activeButton===e.name)?s.active:""}
                        onClick={this.setFilter}>{e.label}</button>
                    )
                )}


            </div>
        )
    }
}

const SearchPanel = ({placeholder = '', ...props}) => {
    const setSearchText = (e)=>{
        props.setSearchText(e.target.value)
    }
    return (<div className={s.baseBlock}>
        <input placeholder={placeholder} className={s.searchInput} onChange={setSearchText}/>
        <ItemStatusFilter setButtonFilter={props.setButtonFilter} activeButton={props.activeButton}/>
    </div>)
}

export default SearchPanel