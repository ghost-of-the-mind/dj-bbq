import React from 'react';
import Userfront from "@userfront/react";
import { Navigate } from 'react-router-dom';

import AdminAddRecipe from './admin-actions/admin-add-recipe.js';
import AdminUploadRecipeImg from './admin-actions/admin-upload-recipe-img.js';

const userfrontTenantKey = process.env.REACT_APP_userfront_tenant_key;

// Initialize the Userfront React library with your account ID using 
Userfront.init(userfrontTenantKey);

/*
const LogoutButton = Userfront.build({
    toolId: "odnmbb"
});
*/

// If the user is logged in, show the dashboard
// const userData = JSON.stringify(Userfront.user, null, 2);
// <p>{userData}</p>

const DashboardPage = () => {

    if(!Userfront.accessToken()) {
        return <Navigate to='/login'/>
    }
    
    if(Userfront.accessToken()) {

        return (
            <main>

                <h1>Your Dashboard!</h1>

                <section className='center-text'>
                    <button className='log-out-button' onClick={Userfront.logout}>Logout</button>
                </section>

                <AdminUploadRecipeImg />

                <AdminAddRecipe />

            </main>
        );
    }
}

export default DashboardPage;

