const router = require('express').Router();

require('dotenv').config();

const userAdmin = require('./userfront/admin.js');

//* Stripe
router.get('/products/display', require('./stripe/displayProducts.js'));

router.post('/create-checkout-session', require('./stripe/createCheckoutSession.js'));

//* Recipes

    router.get('/recipes/display', require('./recipes/displayRecipe.js'));

    router.post('/recipes/upload-img', userAdmin, require('./recipes/uploadRecipeImg.js'));
    router.post('/recipes/add', userAdmin, require('./recipes/addRecipe.js'));
    router.put('/recipes/:recipe_id', userAdmin, require('./recipes/updateRecipe.js'));
    router.delete('/recipes/:recipe_id', userAdmin, require('./recipes/deleteRecipe.js'));

/*
//* UserFront

    //* Public (no-auth)
        router.get('/user/public', require('./userfront/public.js'));

    //* Protected (all signed in users)
        router.get('/user/protected', require('./userfront/protected.js'));

    //* Admin
        router.get('/user/admin', require('./userfront/admin.js'));
*/
        
module.exports = router;