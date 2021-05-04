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

      console.log('----- CNAANASNNA -----', candidate);

      if (getHash(password) === candidate.password) {
        res.send('SIGNIN_SUCCESS');
      } else {
        res.send('SIGNIN_FAILURE');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    signIn,
  };
}
