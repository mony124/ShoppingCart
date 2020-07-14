import React from 'react';
import './Todo.css'
import ListItem from './ListItem/ListItem'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);


class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
        currentItem:{
            text: e.target.value,
            key: Date.now()
        }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
    
  }


  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items:filteredItems
    })
  }

  setUpdate(text, key){
    const items = this.state.items;
    items.map(item => {
      if(item.key===key){
        item.text=text;

      }
    })
    this.setState({
      items:items
    })
  }
  render(){
    return(
        
      <div class="app">
        <header>
          <form id ="todoform">
            <input type="text" value={this.state.currentItem.text} 
            placeholder="Enter text"
            onChange={this.handleInput}/>
            <button type="submit" onClick={this.addItem}>Add</button>
          </form>
        </header>
        <ListItem items={this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate={this.setUpdate}></ListItem>
      </div>
    );
  }

}

export default Todo;