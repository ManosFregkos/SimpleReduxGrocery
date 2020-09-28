import React from 'react';
import {connect} from 'react-redux';




class GroceryItems extends React.Component {
    render (){
        return <div id="grocery-items">
        <table border="1">
            <tbody>
            <tr>
                <th></th>
                <th>Item Price</th>
                <th>Item Name</th>
            </tr>
            {this.props.items.map((item,index)=> {
                return <tr key={index}>
                    <td><button onClick={() => this.props.addToCart(item)}>Add to Cart</button></td>
                    <td>{item.price}</td>
                    <td>{item.name}</td>
                </tr>
            })}
            </tbody>
        </table>
        </div>
}
}
function mapStateToProps(state){
    //take state and return object
    return{
        items:state.forSale
    }
}
function MapDispatchToProps(dispatch){ //access to dispatch function return object with functions whhen dispatch actions
    return {
        addToCart:(item)=>{
            dispatch({
                type:'ADD_TO_CART',
                item:item
            })
        }
    }
}
export default connect(mapStateToProps,MapDispatchToProps)(GroceryItems)