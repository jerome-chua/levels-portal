export default function initCandidatesController(db) {
  const signIn = async (req, res) => {
    try {
      const { email, password } = req.body;

      const getCandidate = await db.Candidate.findOne({
        where: {
          email,
        },
      });

      console.log(getCandidate);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    signIn,
  };
}
