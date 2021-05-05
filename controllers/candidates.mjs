import jsSHA from 'jssha';

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
      console.log(err);
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
      console.log(err);
    }
  };

  return {
    signIn,
    getSavedJobs,
  };
}
