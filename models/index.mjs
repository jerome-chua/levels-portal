import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import candidateModel from './candidate.mjs';
import companyModel from './company.mjs';
import jobModel from './job.mjs';
import skillModel from './skill.mjs';

const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];

const db = {};

let sequelize;
if (env === 'production') {
  // Break apart the Heroku database URL, rebuild the configs we need.
  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Create models for DB.
db.Candidate = candidateModel(sequelize, Sequelize.DataTypes);
db.Company = companyModel(sequelize, Sequelize.DataTypes);
db.Job = jobModel(sequelize, Sequelize.DataTypes);
db.Skill = skillModel(sequelize, Sequelize.DataTypes);

// Declare table relationships.
db.Job.belongsToMany(db.Skill, { through: 'jobs_skills' });
db.Skill.belongsToMany(db.Job, { through: 'jobs_skills' });

db.Job.belongsToMany(db.Candidate, { through: 'jobs_saved' });
db.Candidate.belongsToMany(db.Job, { through: 'jobs_saved' });

db.Company.hasMany(db.Job);
db.Job.belongsTo(db.Company);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
