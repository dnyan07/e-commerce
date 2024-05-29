// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../Features/cart/CartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="flex flex-col space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h2 className="text-xl font-bold">{item.title}</h2>
                                    {/* <p>{item.description}</p> */}
                                    <p className="font-bold">${item.price}</p>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
