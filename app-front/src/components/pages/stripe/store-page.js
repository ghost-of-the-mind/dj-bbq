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


            <section className='product-card-grid'>
                
                <DisplayProducts />

            </section>

        </main>
    );
};

export default StorePage;