import React from "react";
import './AddItem.css'

class AddItem extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count: 1
        };
        this.setCount = this.setCount.bind(this);
    }

    handleClick(count){
        this.props.cartItem(count);
    }

    setCount(e){
        this.setState({
            count: parseInt(e.target.value)
        })
    }

    onclick(type){
        this.setState(prevState => {
           return {count: (type == 'add' ? prevState.count + 1: prevState.count > 1 ? prevState.count - 1 : 1)}
        });
        console.log(this.state.count)
    }

    render(){
        return(
            <>
                <div className="item">
                    <div className="input-container ">
                        <button onClick={this.onclick.bind(this, 'minus')} className="minus-btn">
                            <i className="fa-solid fa-minus"></i>
                        </button>

                        <input onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}} placeholder={this.state.count}
                            onChange={(e) => {this.setCount(e)}}
                            value={this.state.count}/>

                        <button onClick={this.onclick.bind(this, 'add')} className="plus-btn">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>  
                </div>
                <div>
                    <div className="add-container">
                        <button className="add-to-cart" onClick={() => this.handleClick(this.state.count)}>
                            <i className="fa fa-bag-shopping"></i> <span>ADD TO CART</span>
                        </button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default AddItem;