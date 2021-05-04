import { resolve } from 'path';
import db from './models/index.mjs';

import initJobsController from './controllers/jobs.mjs';
import initCandidatesController from './controllers/candidates.mjs';

export default function routes(app) {
  const JobsController = initJobsController(db);
  const CandidatesController = initCandidatesController(db);

  app.get('/getjobs/:jobtitle', JobsController.getJobs);
  app.get('/getskills/:jobId', JobsController.getSkills);
  app.get('/allskills', JobsController.allSkills);
  app.get('/filterjobs', JobsController.jobsFiltered);
  app.get('/alljobs', JobsController.allJobs);

  app.post('/signin', CandidatesController.signIn);

  // Main JS page; include the webpack index.html file.
  app.get('/home', (req, res) => {
    res.sendFile(resolve('dist', 'main.html'));
  });
}
