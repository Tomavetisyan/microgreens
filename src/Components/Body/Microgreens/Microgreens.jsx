import React from "react";
import ItemList from "./ItemList/ItemList";
import './Microgreens.css'
import items from "./Items";
import { Link } from "react-router-dom";

class Microgreens extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className="bread-container">
                    <ol className="breadcrumb-list">
                        <li className="breadcrumb-item"><Link to="/" className="hover">Home</Link></li>
                        <li className="breadcrumb-item">Items</li>
                    </ol>
                </div>

                <ItemList item={items} itemInfo={this.props.itemInfo}/>
            </>
        )
    }
}

export default Microgreens;