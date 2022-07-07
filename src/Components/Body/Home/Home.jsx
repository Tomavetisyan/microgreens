import React from "react";
import Info from "./Info/Info";
import Slideshow from "./Slideshow/Slideshow";
import SuggestedItems from "../Microgreens/SuggestedItems/SuggestedItems";

class Home extends React.Component{
    render(){
        return(
            <>
                <Slideshow />
                <div className="indent"></div>
                <Info />
                <div className="indent"></div>
                <SuggestedItems  itemInfo={this.props.itemInfo} cartItem={this.props.cartItem}/>
            </>
        )
    }
}

export default Home;