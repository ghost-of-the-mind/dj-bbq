import React from "react";
import { Link } from "react-router-dom";

import customProxy from "../../logic/fetch-config";

const CartPage = (props) => {

    const { cart, onAdd, onRemove } = props;

    const productTotal = cart.reduce((a, c) => a + c.unit_amount * c.qty, 0) // default value 0
    const taxTotal = 'Icluded in the product price.';
    const shippingTotal = 'Calculated at checkout.'
    const totalCost = productTotal;

    const checkoutData = cart.map(item => (
        { 
            price: item.id, 
            adjustable_quantity: {
                enabled: true,
                minimum: 1,
                maximum: 10,
            },
            quantity: item.qty,
        }
    ));

    const goToCheckout = (e) => {
        e.preventDefault();
        fetch(`${customProxy}/create-checkout-session`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ items: checkoutData}),
        })
        .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
            window.location = url
        })
        .catch((error) => {
            // console.error(error);
            alert("Create Stripe checkout:" + error);
        });
    };

    const currencyFormatter = new Intl.NumberFormat('en-gb', {
        style:"currency", 
        currency:"GBP"
    }) 

    return (
        <main className='cart-section'>

            <h1><small>&#9733; &#9733; &#9733;</small> Your Cart <small>&#9733; &#9733; &#9733;</small></h1>

            {cart.length === 0 && (
                    <section>
                        <p style={{textAlign: "center"}}>
                            Your Cart is Empty... 
                            <br></br>
                            If you are interested, you can visit <Link to="/store"><small>&#9733; &#9733; &#9733;</small> The BBQ Store <small>&#9733; &#9733; &#9733;</small></Link> to see our products.
                        </p>
                    </section>
                )
            }

            {cart.map((item) => (
                <section className='cart-item' key={item.product.id}>
                    <section className='cart-item-images'>
                        <img
                            className='cart-item-image'  
                            alt='of the product' 
                            src={item.product.images} 
                        />
                    </section>

                    <h5 className='cart-item-name'>{item.product.name}</h5>

                    <p className='cart-item-price'>
                    
                        <button className='cart-change-qty-button' onClick={() => onAdd(item)}>+</button>
                            <span className="narrow"></span>
                        {item.qty} * {currencyFormatter.format(item.unit_amount / 100)}
                            <span className="narrow"></span>
                        <button className='cart-change-qty-button' onClick={() => onRemove(item)}>-</button>
                      
                    </p>
                </section>
            ))}

            {cart.length !== 0 && (
                <section className='cart-calc'>
                    <p><i>Total Product Price: {currencyFormatter.format(productTotal / 100)}</i></p>
                    <p><i>Total Tax: {taxTotal}</i></p>
                    <p><i>Shipping Costs: {shippingTotal}</i></p>
                    <p className='cart-total'><strong>Total Costs: {currencyFormatter.format(totalCost / 100)}</strong></p>
                </section>
            )}

            {cart.length > 0 && (
                <section className='cart-checkout-button'>
                    <button className='go-to-checkout-button' onClick={goToCheckout}>
                        Go To Checkout
                    </button>
                </section>
            )}

        </main>
    );
};

export default CartPage;