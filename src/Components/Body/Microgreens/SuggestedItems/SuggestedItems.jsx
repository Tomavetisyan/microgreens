import React from "react";
import './SuggestedItems.css';
import items from "../Items";
import { Link } from "react-router-dom";

class SuggestedItems extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(imageSrc, name, price, description){
        
        this.props.itemInfo(imageSrc, name, price, description);
    }

    slicedItems(items){
        return items.slice(0, 8);
    }
    render(){
        return(
            <div className="suggestedItems">
                <div className="header">
                    <h3>You may like</h3>
                </div>
                <div className="products">
                    <div className="products-container">
                        {     
                        this.slicedItems(items).map(item =>{
                            return <div className="Item">
                                        <Link to={`/items/${item.id}`} className="image-container" onClick={() => this.handleClick(item.imageSrc, item.name, item.price,
                                            item.description) }>
                                            <img src={item.imageSrc} alt=''/>
                                        </Link>
                                        <h2>{item.name}</h2>
                                        <div className="Item-price">
                                            <h3>{item.price}</h3>
                                        </div>
                                    </div>
                        })
                        }
                    </div> 
                </div>
 
            </div>
        )
    }
}

export default SuggestedItems;