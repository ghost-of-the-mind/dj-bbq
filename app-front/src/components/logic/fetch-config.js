const nodeEnv = process.env.REACT_APP_NODE_ENV !== 'production';

const devProxy = process.env.REACT_APP_dev_proxy;
const prodProxy = process.env.REACT_APP_prod_proxy;

const customProxy = nodeEnv ? devProxy : prodProxy;

export default customProxy;

