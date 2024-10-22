import { Request, Response, NextFunction } from "express";
import { meta } from "../../screens/components/meta";
import { Configs } from "../../configs";
import logger from "../../utils/logger";
import { homeScreenContent } from "../../screens/index";


export const home = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", {
      meta: meta(req, {
        pageTitle: Configs.project.name,
        pageDescription: Configs.project.description,
      }),
      header: "",
      footer: "",
      content: await homeScreenContent(),
    });
    
  } catch (error:any) {
    logger.error(error.message)
    console.log(error);
  }
};
