const { Router } = require("express");
const userRouter = Router();

const { register } = require("./controllers");

userRouter.post("/register", register);

module.exports = userRouter;
