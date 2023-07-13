import express from "express";
import { signUp, getUsers, checkUser } from "../controllers/CUser";
const router = express.Router();

// const userCtrl = require("../controllers/user");
// const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/signup", signUp);
router.get("/users", getUsers);
router.post("/signin", checkUser);

module.exports = router;

// "mail": "For@test.com",
//     "passWord": "mdpMDP&1"

// {
//     "id": 23,
//     "lastName": "Rire",
//     "firstName": "Fort",
//     "mail": "For@test.com",
//     "passWord": "$2b$10$UF2alcsOYTM4cg.06scZFufKZH8x1twQbgwN.p750mO0pO4M.oGxu",
//     "birthDate": "2023/31/03"
//   }
