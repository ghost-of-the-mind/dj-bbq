import React from "react";

const StorePage = (props) => {

    const { products, onAdd } = props;
     
    const DisplayProducts = () => {

        const currencyFormatter = new Intl.NumberFormat('en-gb', {
            style:"currency", 
            currency:"GBP"
        }) 

        return products.map(price => 
            (
                <article key={price.product.id} className='product-card'>
                        
                        <img 
                            className='product-card-image' 
                            alt='of the product' 
                            src={price.product.images} 
                        />

                        <table>
                            <tbody>
                                <tr>
                                    <th> 
                                        <p className='product-card-price'>
                                            {currencyFormatter.format(price.unit_amount / 100)} per {price.product.unit_label}
                                        </p>
                                    </th>
                                </tr>
                                <tr>
                                    <td>                
                                        <button className='add-to-cart-button' onClick={() => onAdd(price)}>
                                            Add to Cart
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <section className='product-card-title'>
                            <h4>{price.product.name}</h4>

                            <p>{price.product.description}</p>
                        </section>
    
                </article>
            )
        )
    } 

    return (
        <main>
            
            <h1 className='product-page-title'><small>&#9733; &#9733; &#9733;</small> The BBQ Store <small>&#9733; &#9733; &#9733;</small></h1>

            <aside className="prototype-text center-text">
                <p>"THE BBQ STORE" is using the Stripe payment gateway API. All the information - prices, descriptions, etc. - about the products below are stored on the Stripe database and fetched for display below.</p>
                <p>Products can be added to a shopping cart, checked out at the cart page, and paid for by using Stripe Checkout.</p>
                <p>Currently, the Stripe API is set to "test mode" - since this site is a prototype, no transactions will be initiated.</p>
                <p>If you wish to buy any of the items below, you can go to <a href='https://djbbq.com/collections' rel='noopener noreferrer nofollow' target='_blank'>DJ BBQ's official page</a> and buy the products there.</p>
            </aside>

            <section className='product-card-grid'>
                
                <DisplayProducts />

            </section>

        </main>
    );
};

export default StorePage;