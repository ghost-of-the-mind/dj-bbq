const pool = require('../../database/poolConfig.js');

const updateRecipe = (req, res) => {
    
    // !! Make it condeitional. Update only what you chose to update.
    // !! Add the special ids.

    /*
bacon_bombs, 
sirloin_steak, 
turbo_tuna_salad, 
tomahawk_steak, 
chorizo_breakfast_tacos, 
maple_marinated_salmon,
meatball_sub,
meatloaf,
steak_baguette,
stuffed_pork_fillet,
smoked_lamb_shanks,
piri_piri_chicken_wings,
spicy_guacamole,
chimichurri_sauce,
rump_steak_and_grilled_veg_salad,
korean_philly_cheese_steak,
zaatar_spatchcock_chicken,
    */

    const recipe_id = parseInt(req.params.recipe_id);

    const { 
        recipe, 
        video_url, 
        img_path, 
        summary, 
        cooking_time, 
        servings 
    } = req.body
  
    pool.query('UPDATE recipes SET recipe = $2, video_url = $3, img_path = $4, summary = $5, cooking_time = $6, servings = $7 WHERE recipe_id = $1', [
            recipe_id,    
            recipe, 
            video_url, 
            img_path, 
            summary, 
            cooking_time, 
            servings
        ],
      (error, results) => {
        
        if(error) {
            // console.error(error);
            res.status(403).json({
                success : false,
                msg : 'Could not update the recipe on the database. Check console log/error message.'
            })
        }

        res.status(201).json({ 
            msg : `Recipe with name: ${recipe} has been updated.` 
        })

      }
    )
};

module.exports = updateRecipe;