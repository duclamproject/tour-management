import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/cart.controller";

router.get("/", controller.index);

export const cartRouter: Router = router;
