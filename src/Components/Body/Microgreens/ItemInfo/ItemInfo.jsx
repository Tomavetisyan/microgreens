import React from "react";
import './ItemInfo.css'
import { Link } from "react-router-dom";
import AddItem from "../AddItem/AddItem";
import SuggestedItems from '../SuggestedItems/SuggestedItems'


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
        console.log(this.state)
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
            let maxWidth = this.divElement.clientWidth;
            
            if(window.pageYOffset > 120 && window.pageYOffset < maxHeight && maxWidth > 850.41){
                this.setState({
                    height: window.pageYOffset - 120
                });
            }else if(window.pageYOffset < 120 ){
                this.setState({
                    height: 0
                });
            }
          });
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.imageSrc !== this.props.imageSrc){
            localStorage.setItem('imageSrc', this.props.imageSrc)
            localStorage.setItem('name', this.props.name)
            localStorage.setItem('price', this.props.price)
            localStorage.setItem('description', this.props.description)
            this.setState({ 
                imageSrc: this.props.imageSrc,
                name: this.props.name,
                price: this.props.price,
                description: this.props.description,
            })
        }
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
                            <div className="product-gallery" style={{top: this.state.height}} ref={ (imageHeight) => { this.imageHeight = imageHeight }}>
                                <div className="image-list">
                                    <ul className="image-list-container">
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                        <li className="image-item"><img src={this.state.imageSrc} /></li>
                                    </ul>
                                </div>                               
                                <div className="product-image desktop"  >
                                    <img className="active" src={this.state.imageSrc} />
                                </div>
                                <div className="product-image mobile">
                                    <img className="active" src={this.state.imageSrc} />
                                </div>


                            </div>
                        </div>
                        <div className="info-container">
                            <h1>{this.state.name}</h1>
                            <div className="price">
                                <span>{this.state.price}</span>
                            </div>
                            <div className="item-information">
                                <div>
                                    <a href="" className="shipping"><i className="fa fa-shopping-bag" aria-hidden="true"></i> Shipping</a>
                                </div>
                                <div>
                                    <a href="" className="email"><i className="fa fa-envelope" aria-hidden="true"></i> Ask about this product</a>
                                </div>
                            </div>
                            <div className="info-add-item">
                                <AddItem cartItem={this.props.cartItem}/>
                            </div>
                            <div className="description">
                                <p>{this.state.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indent"></div>
                <SuggestedItems  itemInfo={this.props.itemInfo} cartItem={this.props.cartItem}/>
            </div>
        )
    }
}

export default ItemInfo;