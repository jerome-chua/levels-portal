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

  const allSkills = async (req, res) => {
    try {
      const getAllSkills = await db.Skill.findAll();

      res.send(getAllSkills);
    } catch (err) {
      console.log(err);
    }
  };

  const filterSkills = async (req, res) => {
    try {
      // const { selected } = req.params;
      console.log('selected --------------\n', req.query);

      res.send('Hello world');
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getJobs,
    getSkills,
    allSkills,
    filterSkills,
  };
}
