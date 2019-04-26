import React, {Component} from 'react';

const styles ={
    borbottom:{
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        borderBottomStyle:'solid',
      
    },

    btn:{
        border: 'none',
        backgroundColor: 'white',
        cursor: 'pointer',
    }

  
    // radiocheck:{
    //     width: '1.2em',
    //     height: '1.2em',
    //     backgroundColor: 'white',
    //     borderRadius: '50%',
    //     verticalAlign: 'middle',
    //     border:'1px solid #ddd',
        
    //     outline: 'none',
    //     cursor: 'pointer',
    // }
  };
class ListItem extends Component {
    
    constructor(props) {
        super(props);
    }
    state = {
        value: '',
        check: false,
    }

    
    render(){
        const value = this.props.list.title;
        const isCompleted = this.props.list.isCompleted;
        const id = this.props.list.id;
        const onToggleListItem = this.props.onToggleListItem;
        const onDelete = this.props.onDelete;
        const onEdit = this.props.onEdit;
        
       
        return(
            <li>
                <div className="row" style={{alignItems:"center",padding: "10px 0px"}} >
                
                <div className="col-md-1">

                {/* <input checked={isCompleted} class="form-control"  type="radio" style={styles.radiocheck} id={id}/> */}

                <div className="round">
      <input type="checkbox" className="checkboxcus" checked={isCompleted} id={id} onChange={onToggleListItem}/>
      <label for={id} ></label>
    </div>
                
                {/* <input   type="checkbox" onChange={onToggleListItem}  id={id} checked={isCompleted}/>
                 */}
                
                 </div>
                 <div className="col-md-10" style={styles.borbottom}>
                    <input value={value}  id={id} type="text" onChange={onEdit}  style={{borderWidth: 0,}}></input>
                 </div>
                <div className="col-md-1">
                <button style={styles.btn}  onClick={() => onDelete(id)} >
                        x
                </button>
                </div>
                   
                    

                </div>
            </li>
        );
    }

}

export default ListItem;