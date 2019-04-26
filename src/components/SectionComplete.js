import React,{Component} from 'react';
import List from './List';
import ListItem from './ListItem';


const styles={
    btn:{
        border: 'none',
        backgroundColor: 'white',
        cursor: 'pointer',
        color:'#22badf',
    },
    borbottom:{
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        borderBottomStyle:'solid',
        padding:'0px 20px',
        margin:'0',
      
    }

};

class SectionComplete extends Component{
    constructor (props) {
        super(props);
        this.state = {
            showCompleted: true
        }
    }

   
render(){

    const lists = this.props.lists;
    const showCompleted =this.props.showCompleted;
    const onToggleListItem = this.props.onToggleListItem;
    const onToggleCompletedList = this.props.onToggleCompletedList;
    const onDelete = this.props.onDelete;
    const onEdit = this.props.onEdit;

      

    return(
            <div>
            <div className="row" style={styles.borbottom}>
            <div className="col-md-11" >
            <span style={{float:"left"}} >{lists.length} Completed</span>
            </div>
            <div className="col-md-1">
            <button style={styles.btn} onClick={onToggleCompletedList} >{showCompleted? 'Hide' : 'Show'}</button></div>
              </div>    
              
              
              {showCompleted&&
                 <List onToggleListItem={onToggleListItem} onDelete={onDelete} onEdit={onEdit}  lists={lists}/>}
              </div>
             
                    
                


    );
}
}

export default SectionComplete;