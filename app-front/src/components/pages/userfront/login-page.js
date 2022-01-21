import React from 'react';
import Userfront from "@userfront/react";

require('dotenv').config();

const userfrontTenantKey = process.env.REACT_APP_userfront_tenant_key;

// Initialize the Userfront React library with your account ID using 
Userfront.init(userfrontTenantKey);

// Build the LoginForm component with Userfront.build() using the tool ID corresponding to your login form. 
// This can be found in the Toolkit section of the Userfront dashboard.

const LoginForm = Userfront.build({
    toolId: "lkrond"
});
  
const LoginPage = () => {
    return (
        <main>
            <LoginForm />
        </main>
    )
};
  
export default LoginPage;

