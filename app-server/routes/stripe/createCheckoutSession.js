require('dotenv').config();

const nodeEnv = process.env.NODE_ENV !== 'production';

const YOUR_DOMAIN = nodeEnv ? process.env.REACT_APP_dev_domain : process.env.REACT_APP_prod_domain;

//* Allows Stripe to authentificate our API requests with our key
const stripeSecretKey = nodeEnv ? process.env.REACT_APP_stripe_dev_secret_key : process.env.REACT_APP_stripe_prod_secret_key;
const stripe = require('stripe')(stripeSecretKey);

//* To override the API version, provide the apiVersion option:
//*  Before upgrading your API version in the Dashboard, review both the API changelog and the library changelog.
/*
const stripe = require('stripe')(stripeSecretKey, {
  apiVersion: '2020-08-27',
});
*/

//* After creating a Checkout Session, redirect your customer to the URL returned in the response.
//* Add an endpoint on your server that creates a Checkout Session. A Checkout Session controls what your customer sees 
//* in the Stripe-hosted payment page such as line items, the order amount and currency, and acceptable payment methods.

const createCheckoutSession = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({

        //* Prefill customer data
        //* Use customer_email to prefill the customer’s email address in the email input field. You can also pass a
        //*  Customer ID to customer field to prefill the email address field with the email stored on the Customer.
        //* customer_email: 'customer@example.com',
            
        //* Pick a submit button // Configure the copy displayed on the Checkout submit button by setting the submit_type. There are four different submit types.
            submit_type: 'donate',
            
        //* Collect billing and shipping details
        //* Use billing_address_collection and shipping_address_collection to collect your customer’s address. 
        //* shipping_address_collection requires a list of allowed_countries. Checkout displays the list of allowed
        //* countries in a dropdown on the page.
        // https://www.nationsonline.org/oneworld/country_code_list.htm
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['US', 'CA', 'LV', 'GB', 'IE'],
            },
        //* You can enable phone number collection in Checkout if you need to collect a phone number for shipping or invoicing.
            phone_number_collection: {
                enabled: true,
            },

        /*
        //* You can create shipping options in the dashboard and then add the shipping rate id here,
        //* or you can specify the shipping options here
        // https://stripe.com/docs/payments/checkout/shipping 
            shipping_options: [
                {
                  shipping_rate: 'shr_123456',
                },
            ],
        */

        //* Define a product to sell
        //* Always keep sensitive information about your product inventory, like price and availability, on your server 
        //* to prevent customer manipulation from the client. Define product information when you create the Checkout
        //* Session using predefined price IDs or on the fly with price_data.
        //* Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        // https://stripe.com/docs/tax/products-prices-tax-codes-tax-behavior
            line_items: req.body.items,

            /* 
            // Add the following code in the map that prepares all the item price ids and quantities
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                    maximum: 10
                }
            // This will allow the user to change the quantities at checkout
            */

        /*
        //* Stripe Dashboard controls what payment methods are acceptable. Unless you want to restrict some methods, these
        //* Line of code is not neccecary
        // https://stripe.com/docs/payments/dashboard-payment-methods
        // When you pass multiple payment methods, Checkout dynamically displays them to prioritize what’s most 
        // relevant to the customer. Apple Pay and Google Pay are included automatically when you include card in 
        // payment_method_types.
        // Apple Pay and Google Pay are enabled by default and automatically appear in Checkout when a customer 
        // uses a supported device and has saved at least one card in their digital wallet. 
            payment_method_types: [
                'card',
            ],
        */

        //* Choose the mode
        //* Checkout has three modes: payment, subscription, or setup. Use payment mode for one-time purchases.
        //* Learn more about subscription and setup modes in the docs.
        // For subscriptions - https://stripe.com/docs/tax/subscriptions
            mode: 'payment',

        //* Enable user-redeemable promotion codes - enables a field in Checkout to allow users to input promotion codes.
        // https://stripe.com/docs/payments/checkout/discounts 
            allow_promotion_codes: true,

        /*
        //* Add this line of code so that Stripe can calculate tax for you
        //  https://stripe.com/docs/payments/checkout/taxes
        // https://stripe.com/docs/tax/tax-ids
            automatic_tax: {
                enabled: true,
            },
        
        //* For collecting tax id's
        // https://stripe.com/docs/tax/checkout/tax-ids
            tax_id_collection: {
                enabled: true,
            },
        */

        /*
        //* To protect consumers from unwanted spam, customers must agree to receiving promotional emails before you can contact them.
        //* Checkout helps you collect the necessary consent, where applicable, to send promotional emails.
        // Use a webhook to make this perfect
        // https://stripe.com/docs/payments/checkout/abandoned-carts
        // https://stripe.com/docs/payments/checkout/promotional-emails-consent
            consent_collection: {
                promotions: 'auto',
            },
        */

        /*
        //* When creating the Checkout Session, the expires_at parameter specifies a specific point in the future 
        //* at which the link becomes invalid. Session expiration must be set to at least one hour in the future.
        // https://stripe.com/docs/payments/checkout/managing-limited-inventory
            expires_at: Math.floor(Date.now() / 1000) + (3600 * 2), // Configured to expire after 2 hours
        */

        //* Supply success and cancel URLs
        //* Specify URLs for success and cancel pages—make sure they are publicly accessible so Stripe can redirect 
        //* customers to them. You can also handle both the success and canceled states with the same URL.
        // Extra customization for the success and cancel pages - https://stripe.com/docs/payments/checkout/custom-success-page
            success_url: `${YOUR_DOMAIN}/cart/success`,
            cancel_url: `${YOUR_DOMAIN}/cart/cancel`,
        //* Activate Stripe Tax to monitor your tax obligations, automatically collect tax, and access the reports you need to file returns.
        //* automatic_tax: {enabled: true},
    });

        //* Redirect to Checkout
        //* After creating the session, redirect your customer to the Checkout page’s URL returned in the response.
            res.json({ url: session.url })
                // Alternative method:  res.redirect(303, session.url);

    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = createCheckoutSession;