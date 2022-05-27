import React from "react";
import './Item.css';

class Item extends React.Component{
    render(){
        return(
            <div className="Item">
                <div className="image-container">
                <img src={this.props.item.imageSrc} alt=''/>
                </div>
                <h2>{this.props.item.name}</h2>
                <div className="Item-information">
                <div className="Item-address">
                    <p>{this.props.item.address}</p>
                    <p>{this.props.item.city}</p>
                    <p>{`${this.props.item.state} ${this.props.item.zipCode}`}</p>
                </div>
                <div className="Item-reviews">
                    <h3>{this.props.item.category.toUpperCase()}</h3>
                    <h3 className="rating">{`${this.props.item.rating} stars`}</h3>
                    <p>{`${this.props.item.reviewCount} reviews`}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Item;