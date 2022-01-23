const pool = require('../../database/poolConfig.js');

const displayRecipes = (req, res) => {

    const recipeFilter = 'SELECT * FROM public.recipes ORDER BY recipe_id ASC';
  
    pool.query(recipeFilter, (error, results) => {
      
        if(error) {
            // console.error(error);

            res.status(403).json({
                error : 'Could not display recipes.',
                reason : error,
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