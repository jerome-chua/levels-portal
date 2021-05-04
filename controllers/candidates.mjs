export default function initCandidatesController(db) {
  const signIn = async (req, res) => {
    try {
      const { email, password } = req.body;

      const candidate = await db.Candidate.findOne({
        where: {
          email,
        },
      });

      if (password === candidate.password) {
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
