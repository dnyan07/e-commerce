// src/components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/cart/CartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="w-full max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8 flex flex-col">
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                {/* <p className="text-gray-700 text-base">{product.description}</p> */}
                <p className="text-gray-900 font-bold mt-2">${product.price}</p>
            </div>
            <div className="px-6 py-4">
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
