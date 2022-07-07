import React from "react";
import './Item.css';
import AddItem from "../AddItem/AddItem";
import { Link } from "react-router-dom";

class Item extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(imageSrc, name, price, description){
        
        this.props.itemInfo(imageSrc, name, price, description);
    }
    render(){
        return(
            <div className="Item">
                <Link to={`/items/${this.props.item.id}`} className="image-container" onClick={() => this.handleClick(this.props.item.imageSrc, this.props.item.name, this.props.item.price,
                    this.props.item.description) }>
                    <img src={this.props.item.imageSrc} alt=''/>
                </Link>
                <h2>{this.props.item.name}</h2>
                <div className="Item-price">
                    <h3>{this.props.item.price}</h3>
                </div>
                <div className="add-item">
                    <AddItem cartItem={this.props.cartItem}/>
                </div>
            </div>
        )
    }
}

export default Item;