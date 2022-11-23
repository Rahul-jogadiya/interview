import { Router } from "express";
import { adminLogin, adminRegister } from "../controllers/admin";

const router = Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);

export const adminRouter = router;
