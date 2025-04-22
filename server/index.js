require('dotenv').config()

const app = require('./app.js');
const PORT = process.env.PORT || 3000;
const db = require('./models'),
  { House, Wizard, User, Spell, wizard_spell } = db.models;

db.sync({ force: true })
  .then(() => {
    House.bulkCreate(require('./data/houses.json'), { ignoreDuplicates: true });
    Wizard.bulkCreate(require('./data/wizards.json'), { ignoreDuplicates: true });
    Spell.bulkCreate(require('./data/spells.json'), { ignoreDuplicates: true })
    wizard_spell.bulkCreate(require('./data/wizard_spell.json'), { ignoreDuplicates: true })
    User.bulkCreate(require('./data/users.json'), { ignoreDuplicates: true })
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`HTTP server is listening at http://localhost:${PORT}`);
    });
  })
  .catch(console.error());
