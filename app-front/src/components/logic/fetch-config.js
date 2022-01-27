if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const nodeEnv = process.env.NODE_ENV !== 'production';

const devProxy = process.env.REACT_APP_dev_proxy;
const prodProxy = process.env.REACT_APP_prod_proxy;

const customProxy = nodeEnv ? devProxy : prodProxy;

// const customProxy = 'https://dj-bbq-back-jtist.ondigitalocean.app';

export default customProxy;

