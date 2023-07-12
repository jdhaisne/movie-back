import express from "express";
import { signUp } from "../controllers/CUser";
const router = express.Router();

// const userCtrl = require("../controllers/user");
// const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/signup", signUp);

module.exports = router;
