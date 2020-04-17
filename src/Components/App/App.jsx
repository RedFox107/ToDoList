import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ToDoList from "../ToDoList/ToDoList";
import React from "react";
import '../../style.css';

class App extends React.Component {
    state = {
        data: [
            
        ],
        lastId: 0,
        filterText:"",
        buttonFilter:'all'
    }
    deleteElement = (id)=> {
        this.setState(({data})=>(
            {data:data.filter((e) => e.id !== id)}
            )
        )

    }
    toggleImportant = (id)=>{
        this.setState(({data})=>this.toggleProperty(data,id,'important'))
    }
    toggleDone = (id)=>{
        this.setState(({data})=>this.toggleProperty(data,id,'done'))
    }
    toggleProperty = (arr,id,propName)=>{
        const i = arr.findIndex((e)=>e.id===id),
            item = arr[i];
        return {
            data:[...arr.slice(0,i),{...item,[propName]:!item[propName]},...arr.slice(i+1)]
        }
    }
    addElement = (label="")=>{
        this.setState(({data,lastId})=>(
                {
                    data:[...data,this.createToDoItem(lastId+1,label)],
                    lastId:lastId+1,
                }
            )
        )
    }
    createToDoItem = (id=0,label="",important=false,done=false) => ({
        id,
        label,
        important,
        done
    })

    search = (items,text)=>{

        if(text.length===0) return items;

        return items.filter((item)=> {
            return (item.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
        });
    }

    setSearchText = (text)=>{
        //debugger
        this.setState(({filterText})=>({
            filterText:text
        }))
    }

    filter = (items,filter)=>{
        switch (filter) {
            case 'all':
                return items;
                break;
            case 'active':
                return items.filter(item=>!item.done)
                break;
            case 'done':
                return items.filter(item=>item.done)
                break;
        }
    }
    setButtonFilter = (val)=>{
        this.setState(({buttonFilter})=>({
            buttonFilter:val,
        }))
    }
    render() {
        window.state = this.state
        const {data,filterText,buttonFilter} = this.state,
            toDo = data.filter((e)=>!e.done).length,
            done = data.length-toDo,
            filteredData = this.filter(this.search(data,filterText),buttonFilter);

        return (<div className={"body"}>
            <AppHeader toDo={toDo} done={done}/>
            <SearchPanel placeholder={"search..."} activeButton={buttonFilter} setSearchText={this.setSearchText} setButtonFilter={this.setButtonFilter}/>
            <ToDoList
                todos={filteredData}
                onDelete={this.deleteElement}
                addElement={this.addElement}
                toggleImportant={this.toggleImportant}
                toggleDone={this.toggleDone}
            />
        </div>)
    }
}

export default App