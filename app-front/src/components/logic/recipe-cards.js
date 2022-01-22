import React, { useState, useEffect } from 'react';

import customProxy from './fetch-config';

import clockIcon from '../../assets/ux/recipe-card-icons/clock.png';
import servingsIcon from '../../assets/ux/recipe-card-icons/servings.png';

require('dotenv').config();

const publicPath = process.env.PUBLIC_URL; // %PUBLIC_URL%/

const RecipeSection = () => {

    const [recipes, setRecipes] = useState([]);
 
    useEffect(() => {
        //* let interval; - sets the fetchapi to trigger in intervals

        const fetchData = async () => {
            try {
                // const url = 'http://localhost:8000/recipes/display';
                const url = `${customProxy}/recipes/display`;
                const response = await fetch(url);
                const json = await response.json();

                setRecipes(json);
                
            } catch(error) {
                // console.error(error);
                alert("Recipe displaying:" + error);
            }
        };

        fetchData();

        /* - sets the fetchapi to trigger in intervals
        interval = setInterval(() => {
            fetchData()
        }, 86 * 1000)
        return () => {
            clearInterval(interval)
        }
        */

    }, []); // Determine swhen to re-use useEffect, if this changes.

    return (
        <section className='recipe-card-grid'>
            {recipes.map(recipe => 
                (
                    <article key={recipe.recipe_id} className='recipe-card'>
                
                        <a href={recipe.video_url} rel='noopener noreferrer nofollow' target='_blank'>
                            <img src={publicPath + recipe.img_path} alt={'The end result after following the ' + recipe.recipe + ' recipe'} className='recipe-card-image' />
                            <h2 className='center-text'>{recipe.recipe}</h2>
                        </a>
                        
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className='recipe-card-clock-icon' 
                                            src={clockIcon}
                                            alt='An icon that informs you about how long it might take to cook this recipe'
                                        />
                                    </td>
                                    <th>
                                        <p>&#8776;{recipe.cooking_time} min</p>
                                    </th> 
                                    <td>
                                        <img className='recipe-card-servings-icon' 
                                            src={servingsIcon} 
                                            alt='An icon that informs you about how many people can be served by following this recipe' 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <p>x{recipe.servings} servings</p>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                            
                        <p className='center-text'>{recipe.summary}</p>

                    </article> 

                )
            )}
        </section>
    )
};

//RecipeSection
export default RecipeSection;