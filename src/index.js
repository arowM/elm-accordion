require('./style/reset.scss');
require('./style/layout.scss');
require('./style/accordion.scss');

const { Elm } = require('./Main.elm');

const app = Elm.Main.init({
  node: document.getElementById('elm'),
  flags: null
});
