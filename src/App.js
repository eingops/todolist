import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import SectionComplete from './components/SectionComplete';
import List from './components/List';




const styles ={
  bor:{
    border:'1px solid black',
    
  }
};

class App extends Component {
  state  = {
    lists: [
      {
        title: 'list 1',
        isCompleted: true,
      },  {
        title: 'list 2',
        isCompleted: false,
      },  {
        title: 'list 3',
        isCompleted: false,
      },  {
        title: 'list 4',
        isCompleted: true,
      },  {
        title: 'list 5',
        isCompleted: true,
      },
    ],
    showCompleted: true,
  };
  onToggleCompletedList = () => {
    this.setState({showCompleted : !this.state.showCompleted});
  };

  onToggleListItem = (event) => {
    const target = event.target;
    const value = target.checked;
    const id = target.id;
    const lists = this.state.lists;
    lists[id].isCompleted = value;
    this.setState({ lists: lists })
  };

  


  onCreateList =()=>{

    this.setState({
      lists : [
        ...this.state.lists, 
        { title: '',isCompleted: false,}
      ]
    });

  }

  onEdit = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    const lists = this.state.lists;
    lists[id].title = value;
    this.setState({ lists: lists })
  };

  onDelete = (id) => {
    const lists = this.state.lists;
    lists.splice(id,1);
    this.setState({ lists: lists })
  };



  render(){
    this.state.lists.forEach( (list, index ) => { list.id = index});
    const lists = this.state.lists;
    const showInCompleted =  lists.filter( list =>  !list.isCompleted)
    const completedList = lists.filter( list =>  list.isCompleted);
    return (
      <div className="App">
      <div class="container" style={styles.bor}>
         <Header onCreateList={this.onCreateList}/>
         <SectionComplete onDelete={this.onDelete} onEdit={this.onEdit} onToggleListItem={this.onToggleListItem} onToggleCompletedList={this.onToggleCompletedList} lists={completedList} showCompleted={this.state.showCompleted}/>
         <List lists={showInCompleted} onDelete={this.onDelete} onEdit={this.onEdit} onToggleListItem={this.onToggleListItem}/>
         
        
      </div>
       


      </div>
      
    );
  }
  
}



export default App;
