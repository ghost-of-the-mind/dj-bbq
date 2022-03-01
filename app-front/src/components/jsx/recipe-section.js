import React from "react";

import RecipeCards from "../logic/recipe-cards.js";

export const RecipeSection = () => {
    return (
        
        <main className='recipe-section'>
            
            <h1 className='recipe-section-title'><small>&#9733; &#9733; &#9733;</small> Recipes <small>&#9733; &#9733; &#9733;</small></h1>

            <aside className="prototype-text center-text">
                <p>The "RECIPES" section automatically acquires data - recipe names, images, video URLs, etc. - from a PostgreSQL database. The data is then used to create the recipe cards below.</p>
                <p>Recipes can be added, deleted, and modified using the admin page. The admin page, in turn, utilizes a REST API - HTTP GET, POST, DELETE, PUT requests - to accomplish these tasks.</p>
                <p>Currently the PostgreSQL database has been swapped out for a JSON file to reduce database maintenance costs.</p>
            </aside>

            <RecipeCards />

        </main>
        
    )
};

export default RecipeSection;