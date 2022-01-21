import React from 'react';

const AdminUploadRecipeImg = () => {

    return (
        <section className='contact-form-section'>

            <section className='contact-form-intro'>
                <section className='contact-form-title'>
                    <h2><small>&#9733; &#9733; &#9733;</small> Upload an Image of a Recipe <small>&#9733; &#9733; &#9733;</small></h2>

                    <p>Use this form to upload an image of a recipe befoe uploading the recipe iself.</p>
                    <p>Suggested format: If the name of the recipe is "Bacon Love Bombs" then the name of the image should be "bacon_love_bombs.</p>
                </section>
            </section>

            <form className='contact-form' action='/recipes/upload-img' method='POST' enctype='multipart/form-data'>

                <section>
                    <label for='file'>Upload an IMAGE of the RECIPE:</label>
                    <input 
                        type='file' 
                        id='file' 
                        name='file'
                        accept='.png, .jpeg, .jpg'
                        >
                    </input>    
                </section>

                <section>
                    <button class='admin-form-submit-button' id='admin-form-upload=img-button' type='submit'>
                        Upload Image
                    </button>
                </section>   

            </form>
        </section>
    );
}

export default AdminUploadRecipeImg;