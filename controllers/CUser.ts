const { User } = require("../models/MUser");
const bcrypt = require("bcrypt");

export const signUp = async (req: any, res: any) => {
  //version du code sans la vérification des conditions
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
