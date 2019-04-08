import React, { Component } from 'react';
// import 'bulma/css/bulma.css'
import './App.css';

export default class TodoList extends Component {
  render() {
    return (
      <div className="App">
        <ToDoApp initItems={todoItems}></ToDoApp>
      </div>
    );
  }
}

let displayTextDone = "Done";
let displayTextDoing = "Doing";

let todoItems = [];
todoItems.push({index: 1, value: "to do all hometasks for React/Angular course", done: false});
todoItems.push({index: 2, value: "make peace in a whole world", done: false});
todoItems.push({index: 3, value: "to be elected as a President of the USA", done: false});
todoItems.push({index: 4, value: "to catch an unicorn behind the horn and become a ASP.NET almighty", done: false});

class ToDoApp extends Component{
  constructor(props){
    super(props);
    this.state = {todoItems: todoItems}
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }

  addItem(todoItem){
todoItems.unshift({index: todoItems.length + 1,
   value: todoItem.newItemValue,
    done: false});
    this.setState({todoItems : todoItems});   
  }

removeItem(itemIndex){
  todoItems.splice(itemIndex, 1);
  this.setState({todoItems : todoItems});
}

markTodoDone(itemIndex){
  let task = todoItems[itemIndex];
  todoItems.splice(itemIndex, 1);
  task.done = !task.done;
  //task.displayText =  task.done ? "Done":"Doing";
  task.done ? todoItems.push(task) : todoItems.unshift(task);
  this.setState({todoItems : todoItems});  
}

render(){
  return(
    <div id="main">
    <ToDoHeader></ToDoHeader>
    <ToDoList items={this.props.initItems}
    removeItem = {this.removeItem}
    markTodoDone = {this.markTodoDone}
    
    ></ToDoList>
    <ToDoForm addItem={this.addItem}></ToDoForm>
    </div>
  );
}
}

class ToDoHeader extends Component{
  render(){
    return <h1>Viktor, you have some tasks to be done!!! </h1>
  }
}

class ToDoList extends Component{
  render(){
    let items = this.props.items.map( (item,index)=>{
      return(
        <ToDoListItem key ={index}
        index={index}
        item = {item}
        removeItem={this.props.removeItem}
        markTodoDone={this.props.markTodoDone}
        ></ToDoListItem>
      );
    } );
    return(
<ul className= "lit-group">{items}</ul>
    );
  }
}

class DoneIcon extends Component{
  render(){
    return (<span className="icon has-text-success">
    <i className="fas fa-check-square"></i>
   </span>)
  }
}

class DoingIcon extends Component{
  render(){
    return (<span className="icon has-text-danger">
    <i className="fas fa-ban"></i>
  </span>)
  }
}

class Icon extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {taskStatus: this.props.status}   
  // }

  render(){
    if(this.props.status)
    return (<DoneIcon/>)
    return (<DoingIcon/>)
  }
}


class ToDoListItem extends Component{
  constructor(props){
    super(props);

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickClose(){
    let index = parseInt(this.props.index);
    this.props.removeItem(index);
    
  }

  onClickDone(){
    
    let index = parseInt(this.props.index);
    this.props.markTodoDone(index);
    // console.log(event.target.innerText);
    // if (this.value=="Close") this.value = "Open";
    // else this.value = "Close";
  }

  render(){
    const doneElem = () => { 
        return(
    <span class="icon has-text-success">
    <i class="fas fa-check-square"></i>
   </span>);

  }

  const doingElem = () => { 
    return(
<span class="icon has-text-danger">
  <i class="fas fa-ban"></i>
</span>);

}



    let todoClass = this.props.item.done ? "done notification is-primary" : "undone notification is-danger";
    return(
     <li className="list-group-item">
 
     <div className={todoClass} >
     {/* <div class="notification is-primary">
  
</div> */}
       {/* <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span> */}
       <span className="control">
    <a className="button is-link is-hovered" onClick={this.onClickDone}>
    {/* <DoingIcon></DoingIcon> */}
    <Icon status={this.props.item.done }></Icon>
      {/* {this.props.item.done ? displayTextDone: displayTextDoing} */}
      {/* {this.props.item.done ? {DoingIcon}: {DoneIcon}} */}
    </a>
  </span>

       {this.props.item.value}
       <button type="button" className="delete" onClick={this.onClickClose}>&times;</button>
     </div>
      </li>
    );
  }
}


class ToDoForm extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event){
    event.preventDefault();
let newItemValue = this.refs.itemName.value;

if(newItemValue){ 
  this.props.addItem({newItemValue});
  this.refs.form.reset();
}
  }

componentDidMount(){
  this.refs.itemName.focus();
}


  render(){
    return(
      //take class from bulma
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
<div>
<span className="icon has-text-info">
  <i className="fas fa-info-circle"></i>
</span>
<span className="icon has-text-success">
  <i className="fas fa-check-square"></i>
</span>
<span className="icon has-text-warning">
  <i className="fas fa-exclamation-triangle"></i>
</span>
<span className="icon has-text-danger">
  <i className="fas fa-ban"></i>
</span>
  </div>
<div className="field has-addons">
  <p className="control is-expanded">
      
        <input type="text" ref="itemName" placeholder="add new task..." className="input"></input>
        </p>
        <p className="control">
        <button type="submit" className="button is-danger">Add</button>       
        </p>
        </div>
      </form>
    );
  }
}
