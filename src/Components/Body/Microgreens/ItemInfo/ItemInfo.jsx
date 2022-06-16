import React from "react";
import './ItemInfo.css'
import { Link } from "react-router-dom";
import AddItem from "../AddItem/AddItem";


class ItemInfo extends React.Component{
    constructor(props){
        super(props);

        this.state =  {
            imageSrc: '',
            name: '',
            price: '',
      
          };

    }

    componentDidMount() {
        if(this.props.imageSrc){
            localStorage.setItem('imageSrc', this.props.imageSrc)
            localStorage.setItem('name', this.props.name)
            localStorage.setItem('price', this.props.price)
        }

        this.setState({ 
            imageSrc: localStorage.getItem('imageSrc'),
            name: localStorage.getItem('name'),
            price: localStorage.getItem('price'),
        })

    }

    render(){
        return(
            <div className="iteminfo">
                 <div className="grid second-nav">
                    <div className="bread-container">   
                        <ol className="breadcrumb-list">
                            <li className="breadcrumb-item"><Link to="/" className="hover">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/items" className="hover">Items</Link></li>
                            <li className="breadcrumb-item active">{this.state.name}</li>
                        </ol>
                    </div>
                </div>
                <div className="iteminfo-container">
                    <div className="grid product">
                    <div className="product-container column-xs-12 column-md-5">
                        <div className="product-gallery">
                        <div className="product-image">
                            <img className="active" src={this.state.imageSrc}/>
                        </div>
                        <ul className="image-list">
                            <li className="image-item"><img src={this.state.imageSrc} /></li>
                            <li className="image-item"><img src={this.state.imageSrc} /></li>
                            <li className="image-item"><img src={this.state.imageSrc} /></li>
                        </ul>
                        </div>
                    </div>
                    <div className="info-container column-xs-12 column-md-5 ">
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.price}</h2>
                        <div className="description">
                        <p>The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort and ingenuity for the grower.</p>
                        <p>By contrast with other plant cultivation practices, bonsai is not intended for production of food or for medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small trees growing in a container.</p>
                        </div>
                        <AddItem />
                    </div>
                    </div>
                    <div className="related-products">
                        <div className="column-xs-12">
                            <h3>You may also like</h3>
                        </div>
                        <div className="products">
                            <div className="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p className="price">{this.state.price}</p>
                            </div>
                            <div className="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p className="price">{this.state.price}</p>
                            </div>
                            <div className="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p className="price">{this.state.price}</p>
                            </div>
                            <div className="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p className="price">{this.state.price}</p>
                            </div>
                            <div className="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p className="price">{this.state.price}</p>
                            </div>
                            <div className="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p className="price">{this.state.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemInfo;