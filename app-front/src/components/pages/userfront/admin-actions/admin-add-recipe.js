import React from 'react';

const AdminAddRecipe = () => {

    return (
        <section className='contact-form-section'>

            <section className='contact-form-intro'>
                <section className='contact-form-title'>
                    <h2><small>&#9733; &#9733; &#9733;</small> Add A Recipe <small>&#9733; &#9733; &#9733;</small></h2>

                    <p>Use this form to add a recipe to the Home page's list of recipes.</p>
                </section>
            </section>

            <form className='contact-form' action='/recipes/add' method='POST'>

                <section>
                    <label for='recipe'>NAME of the RECIPE you want to add:</label>
                    <input 
                        type='text' 
                        id='recipe' 
                        name='recipe'
                        placeholder='Bacon Love Bombs'
                        required
                        size='40'
                        >
                    </input>
                </section>

                <section>
                    <label for='video_url'>LINK to RECIPE's Youtube VIDEO:</label>
                    <input 
                        type='url' 
                        id='video_url' 
                        name='video_url'
                        placeholder='https://www.youtube.com/watch?v=Qg1Mymg7-w8'
                        required
                        size='40'
                        >
                    </input>  
                </section>

                <section>
                    <label for='img_path'>State the path to the Recipe's image on the server:</label>
                    <p>Format: assets/recipe-images/enter_name_of_image.png</p>
                    <input 
                        type='text' 
                        id='img_path' 
                        name='img_path'
                        placeholder='assets/recipe-images/enter_name_of_image.png'
                        required
                        size='40'
                        >
                    </input>    
                </section>

                <section>
                    <label for='summary'>SUMMARIZE the RECIPE in about 20 words max:</label>
                    <textarea 
                        type='text' 
                        id='summary' 
                        name='summary' 
                        placeholder='Pork shoulder, wrapped in bacon, vegetables and spices by choice, chilies for heat, planet-DAMN bbq sauce.'
                        required
                        rows='4' 
                        cols='40'
                        >              
                    </textarea>
                </section>

                <section>
                    <label for='cooking_time'>How much TIME does it take to make this RECIPE?</label>
                    <input 
                        type='number' 
                        id='cooking_time' 
                        name='cooking_time'
                        placeholder='37'
                        required
                        size='40'
                        >
                    </input>
                </section>

                <section>
                    <label for='servings'>How many SERVINGS can you prepare by following this RECIPE?</label>
                    <input 
                        type='number' 
                        id='servings' 
                        name='servings'
                        placeholder='2'
                        required
                        size='40'
                        >
                    </input>                 
                </section>

                <section>
                    <button id='admin-form-submit-button' class='admin-form-submit-button' type='submit'>
                        Submit Recipe
                    </button>
                </section>   

            </form>
        </section>
    );
}

/*
const button = document.getElementById('admin-form-submit-button');

if (button) {
    button.addEventListener('submit', ()=> {

        const recipe = document.querySelector('#recipe').value;
        const video_url = document.querySelector('#video_url').value;
        const img_path = document.querySelector('#img_path').value;
        const summary = document.querySelector('#summary').value;
        const cooking_time = document.querySelector('#cooking_time').value;
        const servings = document.querySelector('#servings').value;
      
        fetch('/recipes/add', {
            method: 'POST',
            body: {
                "recipe": recipe,   
                "video_url": video_url,
                "img_path": img_path, 
                "summary": summary, 
                "cooking_time": cooking_time,
                "servings": servings
            },
            headers: {
                'Content-Type': 'application/json'
            },
        });
    });
}
*/

export default AdminAddRecipe;