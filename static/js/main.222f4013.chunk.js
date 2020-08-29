(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],[,function(t,e,a){t.exports={important:"ToDoList_important__k6C16",toDoList:"ToDoList_toDoList__hWKq0",toDoListItem:"ToDoList_toDoListItem__Fl_-T",toDoListItemLabel:"ToDoList_toDoListItemLabel__2qV8M",btnWrap:"ToDoList_btnWrap__Z-JUe",btn:"ToDoList_btn__2EzZz",excBtn:"ToDoList_excBtn__3K01o",trashBtn:"ToDoList_trashBtn__3hXSa",done:"ToDoList_done__K6XMJ",createItemWrapper:"ToDoList_createItemWrapper__tiwpo",errors:"ToDoList_errors__2cuTC"}},,,,,function(t,e,a){t.exports={baseBlock:"SearchPanel_baseBlock__hYsJL",searchInput:"SearchPanel_searchInput__mKZKa",btnGroup:"SearchPanel_btnGroup__3c-KR",active:"SearchPanel_active__1UNzX"}},,,,,,function(t,e,a){},,function(t,e,a){t.exports={appHeader:"AppHeader_appHeader__1I59V"}},function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=a(8),i=a(9),s=a(10),u=a(2),m=a(3),d=a(5),p=a(4),f=a(14),h=a.n(f),g=(a(12),function(t){var e=t.toDo,a=t.done;return r.a.createElement("div",{className:"".concat(h.a.appHeader," flex")},r.a.createElement("h1",null,"Todo List"),r.a.createElement("h2",null,e," more to do, ",a," done"))}),v=a(7),b=a(6),_=a.n(b),E=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={activeFilter:0},t.buttons=[{label:"All",name:"all",id:0},{label:"Active",name:"active",id:1},{label:"Done",name:"done",id:2}],t.setFilter=function(e){t.props.setButtonFilter(e.target.name)},t}return Object(m.a)(a,[{key:"render",value:function(){var t=this,e=this.props.activeButton;return r.a.createElement("div",{className:_.a.btnGroup},this.buttons.map((function(a){return r.a.createElement("button",{name:a.name,key:a.id,className:e===a.name?_.a.active:"",onClick:t.setFilter},a.label)})))}}]),a}(r.a.PureComponent),D=function(t){var e=t.placeholder,a=void 0===e?"":e,n=Object(v.a)(t,["placeholder"]);return r.a.createElement("div",{className:_.a.baseBlock},r.a.createElement("input",{placeholder:a,className:_.a.searchInput,onChange:function(t){n.setSearchText(t.target.value)}}),r.a.createElement(E,{setButtonFilter:n.setButtonFilter,activeButton:n.activeButton}))},I=a(1),T=a.n(I),x=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).setImportant=function(){t.props.toggleImportant()},t.deleteElement=function(){t.props.onDeleted()},t.toggleDone=function(){t.props.toggleDone()},t}return Object(m.a)(a,[{key:"render",value:function(){var t=this.props,e=t.label,a=t.done,n=t.important;return r.a.createElement("div",{className:T.a.toDoListItem},r.a.createElement("span",{className:"".concat(T.a.toDoListItemLabel,"  ").concat(n&&T.a.important," ").concat(a&&T.a.done),onClick:this.toggleDone},e),r.a.createElement("div",{className:T.a.btnWrap},r.a.createElement("button",{className:"".concat(T.a.excBtn," ").concat(T.a.btn),onClick:this.setImportant},r.a.createElement("i",{className:"fa fa-exclamation"})),r.a.createElement("button",{className:"".concat(T.a.trashBtn," ").concat(T.a.btn),onClick:this.deleteElement},r.a.createElement("i",{className:"fa fa-trash-o"}))))}}]),a}(r.a.PureComponent);x.defaultProps={important:!1};var L=x,O=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={newItemText:"",errors:""},t.ref=r.a.createRef(),t.changeText=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.setState((function(){return{errors:"",newItemText:a?"":t.ref.current.value}}))},t.addElement=function(){var e=t.state.newItemText;e?(t.props.addElement(e),t.changeText(null,!0)):t.setState((function(t){return Object(i.a)({},t,{errors:"Text field cannot be empty!"})}))},t}return Object(m.a)(a,[{key:"render",value:function(){var t=this.props,e=t.todos,a=Object(v.a)(t,["todos"]),n=this.state,o=n.newItemText,c=n.errors;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:T.a.toDoList},e.map((function(t){var e=t.id,n=Object(v.a)(t,["id"]);return r.a.createElement("li",{key:e},r.a.createElement(L,Object.assign({},n,{onDeleted:function(){a.onDelete(e)},toggleImportant:function(){a.toggleImportant(e)},toggleDone:function(){a.toggleDone(e)}})))}))),r.a.createElement(j,{newItemText:o,errors:c,ref:this.ref,changeText:this.changeText,addElement:this.addElement}))}}]),a}(r.a.Component),j=r.a.forwardRef((function(t,e){var a=t.newItemText,n=t.errors,o=t.changeText,c=t.addElement;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.createItemWrapper},r.a.createElement("input",{onChange:o,className:_.a.searchInput,value:a,ref:e,placeholder:"Create new item..."}),r.a.createElement("button",{onClick:c,className:T.a.btn},"Add item")),r.a.createElement("div",{className:T.a.errors},r.a.createElement("span",null,n)))})),S=O,y=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={data:[],lastId:0,filterText:"",buttonFilter:"all"},t.putNewDataInLocalStorage=function(t){localStorage.setItem("todo_items",JSON.stringify(t))},t.deleteElement=function(e){t.setState((function(a){var n=a.data.filter((function(t){return t.id!==e}));return t.putNewDataInLocalStorage(n),{data:n}}))},t.toggleImportant=function(e){t.setState((function(a){var n=a.data;return t.toggleProperty(n,e,"important")}))},t.toggleDone=function(e){t.setState((function(a){var n=a.data;return t.toggleProperty(n,e,"done")}))},t.toggleProperty=function(t,e,a){var n=t.findIndex((function(t){return t.id===e})),r=t[n];return{data:[].concat(Object(s.a)(t.slice(0,n)),[Object(i.a)({},r,Object(l.a)({},a,!r[a]))],Object(s.a)(t.slice(n+1)))}},t.addElement=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.setState((function(a){var n=a.data,r=a.lastId+1,o=[].concat(Object(s.a)(n),[t.createToDoItem(r,e)]);return t.putNewDataInLocalStorage(o),{data:o,lastId:r}}))},t.createToDoItem=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{id:t,label:e,important:a,done:n}},t.search=function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))},t.setSearchText=function(e){t.setState((function(t){t.filterText;return{filterText:e}}))},t.filter=function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}))}},t.setButtonFilter=function(e){t.setState((function(t){t.buttonFilter;return{buttonFilter:e}}))},t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todo_items"))||[],e=t.map((function(t,e){t.id=e}));this.setState((function(){return{data:t,lastId:e.length-1}}))}},{key:"render",value:function(){var t=this.state,e=t.data,a=t.filterText,n=t.buttonFilter,o=e.filter((function(t){return!t.done})).length,c=e.length-o,l=this.filter(this.search(e,a),n);return r.a.createElement("div",{className:"body"},r.a.createElement(g,{toDo:o,done:c}),r.a.createElement(D,{placeholder:"search...",activeButton:n,setSearchText:this.setSearchText,setButtonFilter:this.setButtonFilter}),r.a.createElement(S,{todos:l,onDelete:this.deleteElement,addElement:this.addElement,toggleImportant:this.toggleImportant,toggleDone:this.toggleDone}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.222f4013.chunk.js.map