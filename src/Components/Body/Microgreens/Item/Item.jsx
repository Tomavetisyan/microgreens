import React from "react";
import './Item.css';
import AddItem from "../AddItem/AddItem";

class Item extends React.Component{
    render(){
        return(
            <div className="Item">
                <div className="image-container">
                    <img src={this.props.item.imageSrc} alt=''/>
                </div>
                <h2>{this.props.item.name}</h2>
                <div className="Item-price">
                    <h3>{this.props.item.price}</h3>
                </div>
                <div className="add-item">
                    <AddItem />
                </div>
            </div>
        )
    }
}

export default Item;