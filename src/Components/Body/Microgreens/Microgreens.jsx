import React from "react";
import ItemList from "./ItemList/ItemList";
import './Microgreens.css'
import items from "./Items";

class Microgreens extends React.Component{
    render(){
        return(
            <>
                <ItemList item={items}/>
            </>
        )
    }
}

export default Microgreens;