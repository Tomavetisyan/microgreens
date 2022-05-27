import React from "react";
import Info from "./Info/Info";
import Slideshow from "./Slideshow/Slideshow";

class Home extends React.Component{
    render(){
        return(
            <>
                <Slideshow />
                <Info />
            </>
        )
    }
}

export default Home;