import React from "react";

const SearchPanel = ({placeholder='',...props})=>{
    return (<div>
        <input placeholder={placeholder}/>
    </div>)
}
export default SearchPanel