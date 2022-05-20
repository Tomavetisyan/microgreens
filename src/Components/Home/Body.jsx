import React from "react";
import Info from "../Home/Info/Info";
import Slideshow from "../Home/Slideshow/Slideshow";

class Body extends React.Component{
    render(){
        return(
            <div>
                <Slideshow />
                <Info />    
                <Info />    
                <Info />    
                <Info />    
                <Info />    
            </div>
        )
    }
}

export default Body;