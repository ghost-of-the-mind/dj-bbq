require('dotenv').config();

const nodeEnv = process.env.REACT_APP_NODE_ENV !== 'production';

// Allows Stripe to authentificate our API requests with our key
const stripeSecretKey = nodeEnv ? process.env.REACT_APP_stripe_dev_secret_key : process.env.REACT_APP_stripe_prod_secret_key;
const stripe = require('stripe')(stripeSecretKey);

//To override the API version, provide the apiVersion option:
// Before upgrading your API version in the Dashboard, review both the API changelog and the library changelog.
/*
const stripe = require('stripe')(stripeSecretKey, {
  apiVersion: '2020-08-27',
});
*/

// The API has an Expand feature that allows you to retrieve linked objects in a single call, effectively replacing the object ID
//  with all its properties and values.
// Normally you have to make two requests, but with the expand option we can tell stripe api to respond with the price list
// and an expanded array of all the products. 

const displayProducts = async (req, res) => {
    try {

        const prices = await stripe.prices.list({
            active: true,
            expand: ['data.product'],
        });
    
        const data = prices.data;
    
        res.status(200).send(data);

    } catch(error) {

        res.status(400).send(error);

    }   
}

module.exports = displayProducts;