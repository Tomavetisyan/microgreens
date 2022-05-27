import React from "react";
import ItemList from "./ItemList/ItemList";
import './Microgreens.css'

const item = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bordertown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };

const items = [
    item,
    item,
    item,
    item,
    item,
    item
];
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