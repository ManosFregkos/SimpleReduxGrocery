import React from 'react';
import {connect} from 'react-redux';

class GroceryCart extends React.Component{
    total(){
        return this.props.items.reduce((total,item)=>{
            return total+item.price;
        },0)
    }
    render() {
        if(this.props.items.lenght===0){
            return <div id="grocery-cart">
                <p>Cart Is Empty</p>
            </div>
        }
        return (
            <div id="grocery-cart">
                <table border="1">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Item Price</th>
                            <th>Item Name</th>
                        </tr>
                        {this.props.items.map((item,index)=>{
                            return <tr key={index}>
                                <td>
                                    <button onClick={() => this.props.removeFromCart(index)}>
                                        Remove from cart
                                    </button>
                                </td>
                                <td>{item.price}</td>
                                <td>{item.name}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <p>Total: ${this.total()}</p>
            </div>
        )
    }
}
function mapStateToProps(state){
    //take state and return object
    return{
        items:state.cart
    }
}
function MapDispatchToProps(dispatch){ //access to dispatch function return object with functions whhen dispatch actions
    return {
        removeFromCart:(index)=>{
            dispatch({
                type:'REMOVE_FROM_CART',
                index:index
            })
        }
    }
}
export default connect(mapStateToProps,MapDispatchToProps)(GroceryCart)