import express from "express";
import { home } from "../controllers/screens/index";
const indexRouter = express.Router();

indexRouter.get("/", home);

export = indexRouter;
