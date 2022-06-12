import React from "react";
import './ItemInfo.css'
import { Link } from "react-router-dom";

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
            <div>
                <div class="container">
                    <div class="grid second-nav">
                    <div class="column-xs-12">
                        <nav>
                        <ol class="breadcrumb-list">
                            <li class="breadcrumb-item"><Link to="/" className="hover">Home</Link></li>
                            <li class="breadcrumb-item"><Link to="/items" className="hover">Items</Link></li>
                            <li class="breadcrumb-item active">{this.state.name}</li>
                        </ol>
                        </nav>
                    </div>
                    </div>
                    <div class="grid product">
                    <div class="product-container column-xs-12 column-md-5">
                        <div class="product-gallery">
                        <div class="product-image">
                            <img class="active" src={this.state.imageSrc}/>
                        </div>
                        <ul class="image-list">
                            <li class="image-item"><img src={this.state.imageSrc} /></li>
                            <li class="image-item"><img src={this.state.imageSrc} /></li>
                            <li class="image-item"><img src={this.state.imageSrc} /></li>
                        </ul>
                        </div>
                    </div>
                    <div class="info-container column-xs-12 column-md-5 ">
                        <h1>{this.state.name}</h1>
                        <h2>{this.state.price}</h2>
                        <div class="description">
                        <p>The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort and ingenuity for the grower.</p>
                        <p>By contrast with other plant cultivation practices, bonsai is not intended for production of food or for medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small trees growing in a container.</p>
                        </div>
                        <button class="add-to-cart">Add To Cart</button>
                    </div>
                    </div>
                    <div class="related-products">
                        <div class="column-xs-12">
                            <h3>You may also like</h3>
                        </div>
                        <div className="products">
                            <div class="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p class="price">{this.state.price}</p>
                            </div>
                            <div class="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p class="price">{this.state.price}</p>
                            </div>
                            <div class="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p class="price">{this.state.price}</p>
                            </div>
                            <div class="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p class="price">{this.state.price}</p>
                            </div>
                            <div class="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p class="price">{this.state.price}</p>
                            </div>
                            <div class="column-xs-12 column-md-4">
                                <img src={this.state.imageSrc}/>
                                <h4>{this.state.name}</h4>
                                <p class="price">{this.state.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemInfo;