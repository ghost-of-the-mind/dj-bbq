import React from "react";

import RecipeCards from "../logic/recipe-cards.js";

export const RecipeSection = () => {
    return (
        
        <main className='recipe-section'>
            
            <h1 className='recipe-section-title'><small>&#9733; &#9733; &#9733;</small> Recipes <small>&#9733; &#9733; &#9733;</small></h1>

            <RecipeCards />

        </main>
        
    )
};

export default RecipeSection;