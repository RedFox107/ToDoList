(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],[,function(t,e,a){t.exports={important:"ToDoList_important__k6C16",toDoList:"ToDoList_toDoList__hWKq0",toDoListItem:"ToDoList_toDoListItem__Fl_-T",toDoListItemLabel:"ToDoList_toDoListItemLabel__2qV8M",toDoListItemInput:"ToDoList_toDoListItemInput__1cdOr",btnWrap:"ToDoList_btnWrap__Z-JUe",btn:"ToDoList_btn__2EzZz",excBtn:"ToDoList_excBtn__3K01o",trashBtn:"ToDoList_trashBtn__3hXSa",refactorBtn:"ToDoList_refactorBtn__3B4gn",refactorBtnActive:"ToDoList_refactorBtnActive__1YuBr",done:"ToDoList_done__K6XMJ",createItemWrapper:"ToDoList_createItemWrapper__tiwpo",errors:"ToDoList_errors__2cuTC"}},,,,,function(t,e,a){t.exports={baseBlock:"SearchPanel_baseBlock__hYsJL",searchInput:"SearchPanel_searchInput__mKZKa",btnGroup:"SearchPanel_btnGroup__3c-KR",active:"SearchPanel_active__1UNzX"}},,,,,,function(t,e,a){},,function(t,e,a){t.exports={appHeader:"AppHeader_appHeader__1I59V"}},function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(13),c=a.n(r),i=a(8),l=a(9),s=a(10),u=a(2),m=a(3),f=a(5),d=a(4),p=a(14),h=a.n(p),g=(a(12),function(t){var e=t.toDo,a=t.done;return o.a.createElement("div",{className:"".concat(h.a.appHeader," flex")},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,e," more to do, ",a," done"))}),v=a(7),b=a(6),I=a.n(b),_=function(t){Object(f.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={activeFilter:0},t.buttons=[{label:"All",name:"all",id:0},{label:"Active",name:"active",id:1},{label:"Done",name:"done",id:2}],t.setFilter=function(e){t.props.setButtonFilter(e.target.name)},t}return Object(m.a)(a,[{key:"render",value:function(){var t=this,e=this.props.activeButton;return o.a.createElement("div",{className:I.a.btnGroup},this.buttons.map((function(a){return o.a.createElement("button",{name:a.name,key:a.id,className:e===a.name?I.a.active:"",onClick:t.setFilter},a.label)})))}}]),a}(o.a.PureComponent),E=function(t){var e=t.placeholder,a=void 0===e?"":e,n=Object(v.a)(t,["placeholder"]);return o.a.createElement("div",{className:I.a.baseBlock},o.a.createElement("input",{placeholder:a,className:I.a.searchInput,onChange:function(t){n.setSearchText(t.target.value)}}),o.a.createElement(_,{setButtonFilter:n.setButtonFilter,activeButton:n.activeButton}))},D=a(1),T=a.n(D),L=function(t){Object(f.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isRefactorNow:!1,itemText:t.props.label},t.setImportant=function(){t.props.toggleImportant()},t.deleteElement=function(){t.props.onDeleted()},t.toggleDone=function(){t.props.toggleDone()},t.toggleRefactorMode=function(){t.setState((function(t){return{isRefactorNow:!t.isRefactorNow}}))},t.refactorItem=function(e){var a=e.target.value;t.setState((function(){return{itemText:a}}))},t.onRefEnd=function(){t.props.onRefactor(t.state.itemText),t.toggleRefactorMode()},t.onEnterKeyPush=function(e){"Enter"===e.key&&t.onRefEnd()},t}return Object(m.a)(a,[{key:"render",value:function(){var t=this.props,e=t.label,a=t.done,n=t.important,r=this.state.isRefactorNow;return o.a.createElement("div",{className:T.a.toDoListItem},r?o.a.createElement("input",{onKeyDown:this.onEnterKeyPush,onChange:this.refactorItem,value:this.state.itemText,className:"".concat(T.a.toDoListItemInput," ").concat(T.a.toDoListItemLabel," "),autoFocus:!0}):o.a.createElement("span",{className:"".concat(T.a.toDoListItemLabel,"  ").concat(n&&T.a.important," ").concat(a&&T.a.done),onClick:this.toggleDone},e),o.a.createElement("div",{className:T.a.btnWrap},o.a.createElement("button",{className:"".concat(T.a.refactorBtn," ").concat(T.a.btn," ").concat(r&&T.a.refactorBtnActive),onClick:r?this.onRefEnd:this.toggleRefactorMode},o.a.createElement("i",{className:r?"fa fa-times":"fa fa-pencil","aria-hidden":"true"})),o.a.createElement("button",{className:"".concat(T.a.excBtn," ").concat(T.a.btn),onClick:this.setImportant},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{className:"".concat(T.a.trashBtn," ").concat(T.a.btn),onClick:this.deleteElement},o.a.createElement("i",{className:"fa fa-trash-o"}))))}}]),a}(o.a.PureComponent);L.defaultProps={important:!1};var x=L,N=function(t){Object(f.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={newItemText:"",errors:""},t.ref=o.a.createRef(),t.changeText=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.setState((function(){return{errors:"",newItemText:a?"":t.ref.current.value}}))},t.addElement=function(){var e=t.state.newItemText;e?(t.props.addElement(e),t.changeText(null,!0)):t.setState((function(t){return Object(l.a)({},t,{errors:"Text field cannot be empty!"})}))},t}return Object(m.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.todos,n=Object(v.a)(e,["todos"]),r=this.state,c=r.newItemText,i=r.errors;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:T.a.toDoList},a.map((function(e){var a=e.id,r=Object(v.a)(e,["id"]);return o.a.createElement("li",{key:a},o.a.createElement(x,Object.assign({},r,{onRefactor:function(e){t.props.setNewTextInItem(a,e)},onDeleted:function(){n.onDelete(a)},toggleImportant:function(){n.toggleImportant(a)},toggleDone:function(){n.toggleDone(a)}})))}))),o.a.createElement(w,{newItemText:c,errors:i,ref:this.ref,changeText:this.changeText,addElement:this.addElement}))}}]),a}(o.a.Component),w=o.a.forwardRef((function(t,e){var a=t.newItemText,n=t.errors,r=t.changeText,c=t.addElement;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:T.a.createItemWrapper},o.a.createElement("input",{onChange:r,className:I.a.searchInput,value:a,ref:e,placeholder:"Create new item...",onKeyUp:function(t){"Enter"===t.key&&c()}}),o.a.createElement("button",{onClick:c,className:T.a.btn},"Add item")),o.a.createElement("div",{className:T.a.errors},o.a.createElement("span",null,n)))})),y=N,O=function(t){Object(f.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={data:[],lastId:0,filterText:"",buttonFilter:"all"},t.putNewDataInLocalStorage=function(t){localStorage.setItem("todo_items",JSON.stringify(t))},t.deleteElement=function(e){t.setState((function(a){var n=a.data.filter((function(t){return t.id!==e}));return t.putNewDataInLocalStorage(n),{data:n}}))},t.toggleImportant=function(e){t.setState((function(a){var n=a.data;return t.toggleProperty(n,e,"important")}))},t.toggleDone=function(e){t.setState((function(a){var n=a.data;return t.toggleProperty(n,e,"done")}))},t.toggleProperty=function(e,a,n){var o=e.findIndex((function(t){return t.id===a})),r=e[o],c=[].concat(Object(s.a)(e.slice(0,o)),[Object(l.a)({},r,Object(i.a)({},n,!r[n]))],Object(s.a)(e.slice(o+1)));return t.putNewDataInLocalStorage(c),{data:c}},t.addElement=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.setState((function(a){var n=a.data,o=a.lastId+1,r=[].concat(Object(s.a)(n),[t.createToDoItem(o,e)]);return t.putNewDataInLocalStorage(r),{data:r,lastId:o}}))},t.createToDoItem=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{id:t,label:e,important:a,done:n}},t.setNewTextInItem=function(e,a){t.setState((function(n){var o=n.data.map((function(t){return t.id===e&&(t.label=a),t}));return t.putNewDataInLocalStorage(o),{data:o}}))},t.search=function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))},t.setSearchText=function(e){t.setState((function(t){t.filterText;return{filterText:e}}))},t.filter=function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}))}},t.setButtonFilter=function(e){t.setState((function(t){t.buttonFilter;return{buttonFilter:e}}))},t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todo_items"))||[],e=t.map((function(t,e){t.id=e}));this.setState((function(){return{data:t,lastId:e.length-1}}))}},{key:"render",value:function(){var t=this.state,e=t.data,a=t.filterText,n=t.buttonFilter,r=e.filter((function(t){return!t.done})).length,c=e.length-r,i=this.filter(this.search(e,a),n);return o.a.createElement("div",{className:"body"},o.a.createElement(g,{toDo:r,done:c}),o.a.createElement(E,{placeholder:"search...",activeButton:n,setSearchText:this.setSearchText,setButtonFilter:this.setButtonFilter}),o.a.createElement(y,{setNewTextInItem:this.setNewTextInItem,todos:i,onDelete:this.deleteElement,addElement:this.addElement,toggleImportant:this.toggleImportant,toggleDone:this.toggleDone}))}}]),a}(o.a.Component);c.a.render(o.a.createElement(O,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.302c72b2.chunk.js.map