import React from "react";
import './ItemList.css';
import Item from '../Item/Item'

class ItemList extends React.Component{
    render(){
        return(
            <div className="ItemList">
                {
                this.props.item.map(item =>{
                    return <Item item={item} key={item.id}/>
                })
                }
            </div>
        )
    }
}

export default ItemList;