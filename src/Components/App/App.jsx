import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ToDoList from "../ToDoList/ToDoList";
import React from "react";
import '../../style.css';

class App extends React.Component {
    state = {
        data: [
            {
                id: 0,
                label: 'Learn React',
                important: false,
                done:false
            },
            {
                id: 1,
                label: 'Build awesome App',
                important: false,
                done: false,
            }
        ],
        lastId: 1,
    }
    deleteElement = (id)=> {
        this.setState(({data})=>(
            {data:data.filter((e) => e.id !== id)}
            )
        )

    }
    toggleImportant = (id,value)=>{
        this.setState(({data})=>{
            const {item,index} = this.getElementById(data,id)
            return {
                data:[...data.slice(0,index),{...item,important:!item.important},...data.slice(index+1)]
            }
        })

    }
    toggleDone = (id)=>{
        this.setState(({data})=>{
            const {item,index} = this.getElementById(data,id)
            /*
            const {id,label,important,done} = data[i];
            const newItem = this.createToDoItem(id,label,important,!done)
            */
            return {
                data:[...data.slice(0,index),{...item,done:!item.done},...data.slice(index+1)]
            }
        })
    }
    addElement = (label)=>{
        this.setState(({data,lastId})=>(
                {
                    data:[...data,this.createToDoItem(lastId+1,lastId+1)],
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
    getElementById = (data,id)=>{
        const i = data.findIndex((e)=>e.id===id)
        return {item:data[i],index:i};
    }
    render() {
        window.state = this.state
        const {data} = this.state;
        return (<div className={"body"}>
            <AppHeader/>
            <SearchPanel placeholder={"search..."}/>
            <ToDoList
                todos={data}
                onDelete={this.deleteElement}
                addElement={this.addElement}
                toggleImportant={this.toggleImportant}
                toggleDone={this.toggleDone}
            />
        </div>)
    }
}

export default App