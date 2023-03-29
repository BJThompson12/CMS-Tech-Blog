const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHbs = require('express-handlebars');
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

app.use(session(sess));

const helpers = require('./utils/helpers');
const bodyParser = require('body-parser');
const hbs = expressHbs.create({ 
  layoutsDir: 'views/layouts',
  defaultLayout: 'main-layout',
  extname: 'hbs',
  helpers 
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views')


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🚀 Server listening at http://localhost:${PORT}`));
});