import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../redux/features/productSlice';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
export default function Checkout(props) {
    const { id } = props;
    console.log("id", id)
    // const [show, setShow] = useState(false);
    // const login = JSON.parse(localStorage.getItem('User'));
    // const state = useSelector((state) => state.productSlice.cartItems);
    // const inputTotals = state.reduce((accum, curr) => (accum += curr.cartQuantity), 0);
    const cart = useSelector((state) => state.productSlice);
    console.log(cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    // const show_list = (el) => {
    //     console.log(el)
    // }
    return (
        <>
            <Container>
                <Row>
                    {cart.cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your cart is currently empty</p>
                        </div>
                    ) : (
                        <div>
                            <div className="cart-items">
                                {cart.cartItems &&
                                    cart.cartItems.map((cartItem) => (
                                        <div className="cart-item" key={cartItem.id}>
                                            <div className="cart-product">
                                                <img src={cartItem.first_image} alt={cartItem.Name} width={100} />
                                                <div className='Name'>
                                                    <p>{cartItem.name}</p>
                                                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart-product-quantity">
                                                <button onClick={() => handleDecreaseCart(cartItem)}>
                                                    -
                                                </button>
                                                <div className="count">{cartItem.cartQuantity}</div>
                                                <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                            </div>
                                            <div className="cart-product-total-price">
                                                ₹ {cart.cartTotalAmount}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className="cart-summary">
                                <div className="cart-checkout">
                                    <div className="subtotal">
                                        <span>Subtotal</span>
                                        <span className="amount"> ₹ {cart.cartTotalAmount}</span>
                                    </div>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <button className="clear-btn" onClick={() => handleClearCart()}>
                                        Clear Cart
                                    </button>
                                    <Link to="/Checkout" className="btn btn-outline-dark Check-out">Check out</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </Row>
                <br />
            </Container>
        </>
    )
}