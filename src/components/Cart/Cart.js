import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    console.log(cart);
    return (
        <div className='cart'>
            <h2>Your Order's Summary</h2>
            <p>selected items:{cart.length}</p>
            <ul>{cart?.map(p => <li>{p.strMeal} </li>)}</ul>
        </div>
    );
};

export default Cart;