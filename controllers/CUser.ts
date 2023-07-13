const { User } = require("../models/MUser");
const bcrypt = require("bcrypt");

//ROUTE GET POUR RECUPERER TOUS LES UTILISATEURS
// NB : utiliser http:// et non https !!
export const getUsers = async (req: any, res: any) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.send(users);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("An error occurred");
  }
};

//ROUTE POST POUR VERIFIER SI L'UTILISATEUR A DEJA UN COMPTE et qu'il a le bon mot de passe
// NB : utiliser http:// et non https !!
export const checkUser = async (req: any, res: any) => {
  const { mail, password } = req.body;
  try {
    const user = await User.findOne({ where: { mail } });

    if (user) {
      // L'utilisateur existe dans la table
      // Vérifiez le mot de passe en comparant les hashs
      const passwordMatch = bcrypt.compareSync(
        req.body.password,
        user.passWord
      );

      if (passwordMatch) {
        res.send("Connexion réussie");
      } else {
        res.send("Mot de passe incorrect");
      }
    } else {
      // L'utilisateur n'existe pas dans la table
      res.send("Utilisateur non enregistré");
    }
  } catch (error) {
    console.error("Erreur lors de la recherche de l'utilisateur :", error);
    res.status(500).json({ message: "Une erreur s'est produite" });
  }
};

///ROUTE POUR AJOUTER UN USER
export const signUp = async (req: any, res: any) => {
  //version du code sans la vérification des conditions (à supprimer pour mettre l'autre version du code)
  console.log(req.body.mail);
  try {
    const password = req.body.password;

    if (!password) {
      // Gérer le cas où le mot de passe est manquant
      return res.status(400).send("Le mot de passe est requis");
    }
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

    // console.log(user);

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

  //// Code à décommenter pour avoir la vérification des conditions (supprimer la version sans commentaire)
  // const passwordB = req.body.password;
  // const lastNameB = req.body.lastName;
  // const firstNameB = req.body.firstName;
  // const mailB = req.body.mail;
  // const birthDateB = req.body.birthDate;

  // ///conditions pour la date de naissance (formater la date de naissance)
  // const parts = birthDateB.split("-");
  // const formattedBirthDateB = `${parts[0]}-${parts[2]}-${parts[1]}`;

  // //fonction pour vérifier si la personne a au moins 13 ans
  // function isThirteenYearsOld(birthDateF: any) {
  //   const today = new Date();
  //   const thirteenYearsAgo = new Date(
  //     today.getFullYear() - 13,
  //     today.getMonth(),
  //     today.getDate()
  //   );

  //   return birthDateF <= thirteenYearsAgo;

  // }
  // const birthDateF = new Date(formattedBirthDateB);
  // const isThirteenOrMore = isThirteenYearsOld(birthDateF);
  // console.log(isThirteenOrMore);

  // if (isThirteenOrMore) {
  //   console.log("La personne a au moins 13 ans.");
  // } else {
  //   console.log("La personne a moins de 13 ans.");
  // }

  // //regex
  // const passwordRegex =
  //   /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$&()!?\-])[A-Za-z\d@#$&()!?\-]+$/;
  // const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  // if (
  //   passwordB.length >= 6 &&
  //   passwordB.length <= 20 &&
  //   passwordRegex.test(passwordB) &&
  //   lastNameB.length >= 2 &&
  //   firstNameB.length >= 2 &&
  //   mailRegex.test(mailB) &&
  //   isThirteenOrMore
  // ) {
  //   try {
  //     const [user, created] = await User.findOrCreate({
  //       where: { mail: req.body.mail },
  //       defaults: {
  //         lastName: req.body.lastName,
  //         firstName: req.body.firstName,
  //         mail: req.body.mail,
  //         passWord: bcrypt.hashSync(req.body.password, 10),
  //         birthDate: req.body.birthDate,
  //         role: req.body.role,
  //       },
  //     });

  //     console.log(user);

  //     if (created) {
  //       console.log("New user created:", user);
  //       res.send(user);
  //     } else {
  //       console.log("User already exists:", user);
  //       res.send(user);
  //     }
  //   } catch (error) {
  //     console.error("Error occurred:", error);
  //     res.status(500).send("An error occurred");
  //   }
  // } else {
  //   console.log("Les conditions ne sont pas toutes remplies.");
  // }
};
