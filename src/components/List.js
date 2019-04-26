import React, { Component } from 'react';
import ListItem from './ListItem';

class Item extends Component{
    render(){
        const lists = this.props.lists;
        const onToggleListItem = this.props.onToggleListItem;
        const onEdit = this.props.onEdit;
        const onDelete = this.props.onDelete;
        const list = lists && lists.map((list,index)=>
        <ListItem  list={list} id={index} key={index}  onToggleListItem={onToggleListItem} onEdit={onEdit} onDelete={onDelete}></ListItem>);
        return(
            <div>
            <ul style={{ listStyleType: "none" }} >
            {
                list
            }
        </ul>
        </div>
        );
    }
    componentDidMount() {

    }
}

export default Item;