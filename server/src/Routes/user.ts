import { Router } from "express";
import { customerLogin, userRegister } from "../controllers/user";

const router = Router();

router.post("/register", userRegister);
router.post("/login", customerLogin);

export const userRouter = router;
