import React from "react";
import './SuggestedItems.css';
import items from "../Items";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                <h3 className="header">You may like</h3>
                <Carousel responsive={{
                    superLargeDesktop: {
                      // the naming can be any, depends on you.
                      breakpoint: { max: 3000, min: 1024 },
                      items: 4
                    },
                    desktop: {
                        breakpoint: { max: 1250, min: 464 },
                        items: 3
                    },
                    tablet: {
                        breakpoint: { max: 932, min: 0 },
                        items: 2
                    },
                    mobile: {
                        breakpoint: { max: 624, min: 0 },
                        items: 1
                    },

                  }} infiniteLoop={true} >
                        {     
                        this.slicedItems(items).map(item =>{
                            return <div className="suggestedItem">
                                        <Link to={`/items/${item.id}`} className="image-container" onClick={() => this.handleClick(item.imageSrc, item.name, item.price,
                                            item.description) }>
                                            <img src={item.imageSrc} alt=''/>
                                        </Link>
                                        <h2>{item.name}</h2>
                                        <h3>{item.weight}</h3>
                                        <div className="Item-price">
                                            <h3>{item.price}</h3>
                                        </div>
                                    </div>
                        })
                        }
                </Carousel>
            </div>

        )
    }
}

export default SuggestedItems;