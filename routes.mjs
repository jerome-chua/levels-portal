import { resolve } from 'path';
import db from './models/index.mjs';

import initJobsController from './controllers/jobs.mjs';

export default function routes(app) {
  const JobsController = initJobsController(db);

  app.get('/getjobs/:jobtitle', JobsController.getJobs);
  app.get('/getskills/:jobId', JobsController.getSkills);
  app.get('/allskills', JobsController.allSkills);
  app.get('/filterskills', JobsController.filterSkills);

  // Main JS page; include the webpack index.html file.
  app.get('/home', (req, res) => {
    res.sendFile(resolve('dist', 'main.html'));
  });
}
