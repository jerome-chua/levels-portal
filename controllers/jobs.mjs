import pkg from 'sequelize';

const { Op } = pkg;

export default function initJobsController(db) {
  const getJobs = async (req, res) => {
    const { jobtitle } = req.params;

    try {
      const jobs = await db.Job.findAll({
        where: {
          title: {
            [Op.eq]: jobtitle,
          },
        },
      });

      if (jobs.length === 0) {
        res.send(`No jobs found for: ${jobtitle}`);
      }
      res.send(jobs);
    } catch (err) {
      console.error('Error getting jobs: ----\n', err);
    }
  };

  return {
    getJobs,
  };
}
