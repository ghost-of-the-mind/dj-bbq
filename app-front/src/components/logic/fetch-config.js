require('dotenv').config();

/*
const nodeEnv = process.env.NODE_ENV !== 'production';

const digitalOceanPort = process.env.PORT;

const devProxy = process.env.REACT_APP_dev_proxy;
const prodProxy = process.env.REACT_APP_prod_proxy;

const digitalOcealProxy = prodProxy + '/' + digitalOceanPort;

const customProxy = nodeEnv ? devProxy : digitalOcealProxy;
*/

// const customProxy = 'https://dj-bbq-app-server:8080';

// const customProxy = 'https://dj-bbq-app-server:80';

// const customProxy = 'https://dj-bbq-app-server/8080';

// const customProxy = 'https://dj-bbq-app-server/80';

const customProxy = 'https://dj-bbq-app-server';

export default customProxy;

