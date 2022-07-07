import React from "react";
import './ItemList.css';
import Item from '../Item/Item'

class ItemList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="ItemList">
                
                    {
                    this.props.item.map(item =>{
                        return <Item item={item}  itemInfo={this.props.itemInfo} cartItem={this.props.cartItem}/>
                    })
                    }
                
            </div>
        )
    }
}

export default ItemList;