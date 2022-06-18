import React from "react";
import './ItemInfo.css'
import { Link } from "react-router-dom";
import AddItem from "../AddItem/AddItem";


class ItemInfo extends React.Component{
    constructor(props){
        super(props);
        this.headerRef = React.createRef();
        this.state =  {
            imageSrc: this.props.imageSrc,
            name: this.props.name,
            price: this.props.price,
            description: this.props.description,
            height: 0,
          };

    }

    componentDidMount() {
        
        
        // maxHeight+=147
        if(this.props.imageSrc){
            localStorage.setItem('imageSrc', this.props.imageSrc)
            localStorage.setItem('name', this.props.name)
            localStorage.setItem('price', this.props.price)
            localStorage.setItem('description', this.props.description)
        }
        this.setState({ 
            imageSrc: localStorage.getItem('imageSrc'),
            name: localStorage.getItem('name'),
            price: localStorage.getItem('price'),
            description: localStorage.getItem('description')
        })

        window.addEventListener('scroll', () => {
            let imageHeight = this.imageHeight.clientHeight;
        
            let maxHeight = this.divElement.clientHeight - imageHeight;
            console.log(imageHeight)
            if(window.pageYOffset > 147 && window.pageYOffset < maxHeight){
                this.setState({
                    height: window.pageYOffset - 147
                });
            }else{

            }
          });

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
                    <div className="product" ref={ (divElement) => { this.divElement = divElement }}>
                        <div className="product-container">
                            <div className="product-gallery" style={{top: this.state.height}}>
                                <div className="product-image"  ref={ (imageHeight) => { this.imageHeight = imageHeight }}>
                                    <img className="active" src={this.state.imageSrc} />
                                </div>
                                <div className="image-list">
                                    <ul className="image-list-container">
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="info-container">
                            <h1>{this.state.name}</h1>
                            <div className="price">
                                <span>{this.state.price}</span>
                            </div>
                            <div className="item-information">
                                <a href="" className="shipping"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Shipping</a>
                                <a href="" className="email"><i class="fa fa-envelope" aria-hidden="true"></i> Ask about this product</a>
                            </div>
                            <div className="info-add-item">
                                <AddItem />
                            </div>
                            <div className="description">
                                <p>{this.state.description}</p>
                            </div>
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