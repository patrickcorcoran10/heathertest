const sequelize = require('../config/connection.js');
const seedMadlibz = require("./seedMadlibz");
const seedUserCreds = require("./seedUserCreds");
const seedUserLibz = require("./seedUserlibz");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedMadlibz();
    console.log('\n----- Madlibz SEEDED -----\n');
    await seedUserCreds();
    console.log('\n----- UserCreds SEEDED -----\n');
    await seedUserLibz();
    console.log('\n----- UserLibz SEEDED -----\n');
    
    process.exit(0);
  };
  
  seedAll();

  

