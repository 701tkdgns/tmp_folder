const express = require("express");
import { register } from "../controllers/auth";

const router = express.Router();

router.post("/register", register)

export default router