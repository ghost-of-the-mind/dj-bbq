const pool = require('../../database/poolConfig.js');

const deleteRecipe = (req, res) => {
    
    const recipe_id = parseInt(req.params.recipe_id);
  
    pool.query('DELETE FROM "recipes" WHERE "recipe_id" = $1', [
        recipe_id
    ], (error, results) => {

        if(error) {
            // console.error(error.detail);
            res.status(403).json({
                success : false,
                msg : 'Could not delete the recipe from the database. Check console log/error message.'
            })
        }

        res.status(200).send(`Recipe, with id ${recipe_id}, has been deleted.`);

    })
};

module.exports = deleteRecipe;