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

  const jobsFiltered = async (req, res) => {
    try {
      const { skills, jobs } = req.query;

      const filterJobs = await db.Job.findAll({
        where: {
          title: jobs,
        },
        include: [
          {
            model: db.Skill,
            where: {
              name: skills,
            },
          },
          { model: db.Company },
        ],
      });

      res.send(filterJobs);
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const allJobs = async (req, res) => {
    try {
      const getAllJobs = await db.Job.findAll();

      res.send(getAllJobs);
    } catch (err) {
      console.log(err);
    }
  };

  const saveJob = async (req, res) => {
    const { userId } = req.cookies;
    const { savedJobId } = req.body;

    try {
      console.log('test');
      console.log('Lets check: -----------\n', Number(userId), savedJobId);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getJobs,
    getSkills,
    allSkills,
    jobsFiltered,
    allJobs,
    saveJob,
  };
}
