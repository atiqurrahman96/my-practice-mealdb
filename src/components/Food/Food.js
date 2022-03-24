import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Food.css'
const Food = (props) => {
    console.log(props.food);
    console.log(props.handleAddToCart)
    const { handleAddToCart } = props;
    const { strMealThumb, idMeal, strMeal, strCategory, strArea } = props.food;

    return (
        <div className='single-food-container'>
            <div className='single-thumb'>
                <img src={strMealThumb} alt="" />
            </div>
            <div>
                <p>Meal Id:{idMeal}</p>
                <p>Name:{strMeal}</p>
                <p>Category:{strCategory}</p>
                <p>Area of Food:{strArea}</p>
            </div>
            <div className='btn-style'>
                <div>
                    <button onClick={() => handleAddToCart(props.food)}>Add To Cart</button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                </div>



            </div>

        </div>
    );
};

export default Food;