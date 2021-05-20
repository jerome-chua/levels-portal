import jsSHA from 'jssha';

import pkg from 'sequelize';

const getHash = (userInput) => {
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  shaObj.update(userInput); // Generate hashed string based on SHA object.

  return shaObj.getHash('HEX');
};

export default function initCandidatesController(db) {
  const signIn = async (req, res) => {
    try {
      const { email, password } = req.body;

      const candidate = await db.Candidate.findOne({
        where: {
          email,
        },
      });

      if (getHash(password) === candidate.password) {
        res.cookie('userId', candidate.id);
        res.send('SIGNIN_SUCCESS');
        return;
      }
      res.send('SIGNIN_FAILURE');
    } catch (err) {
      console.log('signIn err -----\n', err);
    }
  };

  const getSavedJobs = async (req, res) => {
    const { userId } = req.cookies;

    try {
      const candidate = await db.Candidate.findOne({
        where: {
          id: Number(userId),
        },
      });

      const getjobs = await candidate.getJobs();

      res.send(getjobs);
    } catch (err) {
      console.log('getjobs error: -----\n', err);
    }
  };

  const deleteJob = async (req, res) => {
    try {
      const { jobId } = req.params;
      const { userId } = req.cookies;

      const candidate = await db.Candidate.findOne({
        where: {
          id: Number(userId),
        },
      });

      const candidateJobs = await candidate.getJobs();

      await candidateJobs.destroy({
        where: {
          id: Number(jobId),
        },
      });

      console.log('destroyed Job', candidateJobs);

      res.send('Deleted job');
    } catch (err) {
      console.log('Error : ----\n', err);
    }
  };

  return {
    signIn,
    getSavedJobs,
    deleteJob,
  };
}
