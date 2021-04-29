import pkg from 'sequelize';

const { Op } = pkg;

export default function initJobsController(db) {
  const getJobs = async (req, res) => {
    const { jobtitle } = req.params;

    try {
      const jobs = await db.Job.findAll({
        where: {
          title: {
            [Op.regexp]: jobtitle,
          },
        },
        include: [
          { model: db.Company },
        ],
      });

      res.send(jobs);
    } catch (err) {
      console.error('Error getting jobs: ----\n', err);
    }
  };

  const getSkills = async (req, res) => {
    const { jobId } = req.params;

    try {
      const findJob = await db.Job.findOne({
        where: {
          id: jobId,
        },
      });

      const skills = await findJob.getSkills();
      console.log('Lets get skills: ----\n', skills);

      res.send(skills);
    } catch (err) {
      console.log('Error getting skills: ----\n', err);
    }
  };

  return {
    getJobs,
    getSkills,
  };
}
