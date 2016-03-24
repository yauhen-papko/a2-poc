// Look in ./config folder for proper webpack setup
const ENV = process.env.ENV || 'dev';
module.exports = require(`./config/webpack.${ENV}.js`);