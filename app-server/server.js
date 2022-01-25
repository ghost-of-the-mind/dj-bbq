const express = require('express');
const helmet = require('helmet'); 
const cors = require('cors'); 
const path = require('path'); // Allows to access files through the server in our filesystem
const fileUpload = require('express-fileupload'); // Parses multipart/form-data requests, extracts the files if available, and make them available under req.files property.

//*  ------------- GENERAL SETUP -------------

// Variables - Provides access to variables from the .env file by using process.env.REACT_APP_variable_name
    require('dotenv').config();

    const nodeEnv = process.env.NODE_ENV !== 'production';

    const devPort = process.env.REACT_APP_server_dev_port;
    const prodPort = process.env.PORT;

    const devDomain = process.env.REACT_APP_dev_domain;
    const prodDomain= process.env.REACT_APP_prod_domain;

    const devHost = process.env.REACT_APP_server_dev_host;
    const prodHost = process.env.REACT_APP_server_prod_host;
    
    const PORT = nodeEnv ? devPort : prodPort;
    const HOST = nodeEnv ? devHost : prodHost;
    const domain = nodeEnv ? devDomain : prodDomain;

// Sets CORS options for cross origin requests
    const corsOptions = {
        // Allows only the following HTTP requests to go through
        methods: [
            "PUT", 
            "POST", 
            "DELETE", 
            "GET",
        ],
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": [
            "Origin", 
            "X-Requested-With", 
            "Content-Type", 
            "Accept", 
            "Authorization",
        ],
    };

    /*
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    */

//* Creates the Express server instance as "app" 
    const app = express();

//* -------------- MIDDLEWARE --------------

// Called BETWEEN processing the Request and sending the Response.
    app.use(helmet()); // Sets many http headers to make them more secure
    app.use(cors(corsOptions)); // To allow cross origin conections (like HTTP requests)        
// Instead of using body-parser middleware, use the new Express implementation of the same thing
    app.use(express.json()); // To recognize the incoming Request Object (req.body) as a JSON Object
    app.use(express.urlencoded({ 
        extended: true // Allows aoo to recognize incoming Request Objects as strings or arrays
    })); 
// Allows users to upload files
    app.use(fileUpload({
        createParentPath: true // Enables file uploading
    })); 

//* ------- CORS OPTIONS -------

// If req comes from one of these domains (origins), then allow the request with CORS.
    /**
        app.use((req, res, next) => {
            const corsWhitelist = [
                domain,
            ];
            if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
                res.header('Access-Control-Allow-Origin', req.headers.origin);
            }
            next();
        });
    */

/*
//* ------- SERVING HTML IN PRODUCTION - MIDDLEWARE -------

    if (process.env.NODE_ENV === 'production') {
        app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, './build', 'index.html'));
        })
    }
*/

/*
//* ------- STATIC ASSETS -------

// From where the app will serve static files
    if (process.env.NODE_ENV !== 'production') {
        // Determines from where to load static files or client files
            app.use(express.static(path.join(__dirname, '../app-front/public')));
    
    } else if (process.env.NODE_ENV === 'production') {
        // Serve static files from production version aka build folder 
            app.use(express.static(path.join(__dirname, '../app-front/build'))); 
    }
*/

//* -------------- SERVER ----------------
       
// Determines the PORT and enables LISTENing for requests on the PORT (http://localhost:8000)
    app.listen(PORT, HOST, () => {
        console.debug(`Server host: ${HOST}, domain: ${domain}, port: ${PORT}, node: ${nodeEnv}`);
    });
  
//* ------- ROUTES / ENDPOINTS ---------

// Go to domain/test to make sure the basic API functioning is working properly

    app.get('/', (req, res) => {
        res.status(200).send('The DJ-BBQ API is online.')
    });

    app.get('/test', (req, res) => {
        res.status(200).send('The Basic API endpoints are working.')
    });

// Imports all of the routes from ./routes/index.js
    app.use(require('./routes/allRoutes'));
