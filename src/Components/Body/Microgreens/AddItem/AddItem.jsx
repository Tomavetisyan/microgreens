import React from "react";
import './AddItem.css'

class AddItem extends React.Component{
    render(){
        return(
            <>
                <div className="item">
                    <div className="input-container ">
                        <button>
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <input onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }}}
                        />
                        <button>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>  
                </div>
                <div>
                    <div className="add-container">
                        <button>
                            <i class="fa fa-bag-shopping"></i> <span>ADD TO CART</span>
                        </button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default AddItem;