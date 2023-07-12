const { User } = require("../models/user");
const bcrypt = require("bcrypt");

export const signUp = async (req: any, res: any) => {
  console.log("REQ BODYYYYY", req.body);

  const passwordB = req.body.passWord;
  const lastNameB = req.body.lastName;
  const firstNameB = req.body.firstName;
  const mailB = req.body.mail;
  const passWord = req.body.passWord;
  const birthDate = req.body.birthDate;
  const roleB = req.body.role;

  try {
    const [user, created] = await User.findOrCreate({
      where: { mail: req.body.mail },
      defaults: {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        mail: req.body.mail,
        passWord: bcrypt.hashSync(req.body.password, 10),
        birthDate: req.body.birthDate,
        role: req.body.role,
      },
    });

    console.log(user);

    if (created) {
      console.log("New user created:", user);
      res.send(user);
    } else {
      console.log("User already exists:", user);
      res.send(user);
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred");
  }
};

// // Create a new user
// utilisateurRouter.post("/", async (req, res) => {
//   // check if [nom, prenom, mdp, email, naissance] attributes are present in the req.body (the [role] attribute will be set to "utilisateur" by default, later)
//   const {nom, prenom, email, mdp, naissance} = req.body;
//   if(!nom || !prenom || !email || !mdp || !naissance){
//       return res.status(422).json("Attributs manquants")
//   }

//   // check if the new user's email is already in the database
//   const utilisateur = await Utilisateur.findOne({email : req.body.email})
//   if(utilisateur){
//       return res.status(409).json("Adresse email deja enregistreé")
//   }

//   // if not, create a new user and send a response status 200
//   const encryptedMdp = bcrypt.hashSync(mdp, 8)

//   await Utilisateur.create({
//       nom : nom,
//       prenom : prenom,
//       email : email,
//       mdp : encryptedMdp,
//       naissance : naissance,
//       role : "utilisateur"
//   })

//   res.sendStatus(200)
// });
