require('dotenv').config();

const nodeEnv = process.env.NODE_ENV !== 'production';

const digitalOceanPort = process.env.PORT;

const devProxy = process.env.REACT_APP_dev_proxy;
const prodProxy = process.env.REACT_APP_prod_proxy;

const digitalOceanProxy = prodProxy + digitalOceanPort;

const customProxy = nodeEnv ? devProxy : digitalOceanProxy;

export default customProxy;

