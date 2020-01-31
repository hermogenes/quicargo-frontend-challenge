const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@base-color': '#2c2c5e', '@nav-bar-inverse-active-bg': '#3f3ea3' }
  })
);
