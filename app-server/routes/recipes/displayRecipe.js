const pool = require('../../database/poolConfig.js');

require('dotenv').config();

const nodeEnv = process.env.NODE_ENV !== 'production';
const devFilter = 'SELECT * FROM recipes ORDER BY recipe_id ASC';
const prodFilter = 'SELECT * FROM public.recipes ORDER BY recipe_id ASC';

const displayRecipes = (req, res) => {

    const recipeFilter = nodeEnv ? devFilter : prodFilter;
  
    pool.query(recipeFilter, (error, results) => {
      
        if(error) {
            // console.error(error);

            res.status(403).json({
                success : false,
                msg : 'Could not display recipes.'
            })
        }

        const recipeJSON = results.rows; //!! results.rows[0]["recipe"]

        res.status(200).send(
            recipeJSON
        );

    })
}

/*
SELECT [column1], [column2], ...
FROM [table_name]
WHERE [condition];

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});

*/

module.exports = displayRecipes;