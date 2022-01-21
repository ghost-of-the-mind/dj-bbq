const pool = require('../../database/poolConfig.js');

const addRecipe = (req, res) => {
    
    const { 
        recipe, 
        video_url, 
        img_path, 
        summary, 
        cooking_time, 
        servings 
    } = req.body

    pool.query('INSERT INTO recipes (recipe, video_url, img_path, summary, cooking_time, servings) VALUES ($1, $2, $3, $4, $5, $6)', [
        recipe, 
        video_url, 
        img_path, 
        summary, 
        cooking_time, 
        servings
    ], (error, result) => {

        if(error) {
            // console.error(error.message);
            res.status(403).json({
                success : false,
                msg : 'Could not add the recipe to database. Check console log/error message.'
            })
        }

        res.status(201).json({ 
            msg : `Recipe added with name: ${recipe}.` 
        })
    })
};

module.exports = addRecipe;