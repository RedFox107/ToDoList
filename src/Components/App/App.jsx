import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ToDoList from "../ToDoList/ToDoList";
import React from "react";
import '../../style.css';

class App extends React.Component {
    state = {
        data: [],
        lastId: 0,
        filterText: "",
        buttonFilter: 'all'
    }

    componentDidMount() {
        const savedTodoItems = JSON.parse(localStorage.getItem("todo_items")) || [];
        const todoItemsWithNewId = savedTodoItems.map((val,index)=>{
            val.id = index;
        })
        this.setState(() => ({data: savedTodoItems,lastId:todoItemsWithNewId.length-1}))
    }

    putNewDataInLocalStorage = (data) => {
        localStorage.setItem('todo_items', JSON.stringify(data));
    }
    deleteElement = (id) => {
        this.setState(({data}) => {
                const newData = data.filter((e) => e.id !== id);
                this.putNewDataInLocalStorage(newData);
                return {
                    data: newData
                }
            }
        )

    }
    toggleImportant = (id) => {
        this.setState(({data}) => this.toggleProperty(data, id, 'important'))
    }
    toggleDone = (id) => {
        this.setState(({data}) => this.toggleProperty(data, id, 'done'))
    }
    toggleProperty = (arr, id, propName) => {
        const i = arr.findIndex((e) => e.id === id),
            item = arr[i];
        return {
            data: [...arr.slice(0, i), {...item, [propName]: !item[propName]}, ...arr.slice(i + 1)]
        }
    }
    addElement = (label = "") => {
        this.setState(({data, lastId}) => {
                const newLastId = lastId + 1;
                const newData = [...data, this.createToDoItem(newLastId, label)];
                this.putNewDataInLocalStorage(newData);

                return {
                    data: newData,
                    lastId: newLastId,
                }
            }
        )

    }
    createToDoItem = (id = 0, label = "", important = false, done = false) => ({
        id,
        label,
        important,
        done
    })

    search = (items, text) => {

        if (text.length === 0) return items;

        return items.filter((item) => {
            return (item.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
        });
    }

    setSearchText = (text) => {
        //debugger
        this.setState(({filterText}) => ({
            filterText: text
        }))
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items
            case 'active':
                return items.filter(item => !item.done)
            case 'done':
                return items.filter(item => item.done)
        }
    }
    setButtonFilter = (val) => {
        this.setState(({buttonFilter}) => ({
            buttonFilter: val,
        }))
    }

    render() {
        const {data, filterText, buttonFilter} = this.state,
            toDo = data.filter((e) => !e.done).length,
            done = data.length - toDo,
            filteredData = this.filter(this.search(data, filterText), buttonFilter);

        return (<div className={"body"}>
            <AppHeader toDo={toDo} done={done}/>
            <SearchPanel placeholder={"search..."} activeButton={buttonFilter} setSearchText={this.setSearchText}
                         setButtonFilter={this.setButtonFilter}/>
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