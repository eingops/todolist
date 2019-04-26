import React, { Component } from 'react';

const styles ={
    borbottom:{
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        borderBottomStyle:'solid',
        padding:'0px 20px',
        margin:'0',
      
    }
  };

class Item extends Component {
    constructor (props) {
        super(props);
    }
    render(){

        const createList = this.props.onCreateList;
        return(
          <div className="row"  style={styles.borbottom} >
          <div className="col-md-11" >
          <h2 style={{float:"left",color:"#1de2ed"}}>New List</h2>
          </div>
          <div className="col-md-1">
          <button  className="btn btn-primary" onClick={createList}>
              +
          </button>
          </div>
          
          
      </div>
        );
    }
}

export default Item;