import { Router } from "express";
import { getProfileAll } from "../controllers/perfil.controller";

const router = Router();

// Sin parametro
router.route('/')
    .get( getProfileAll );

// Con parametro

export default router;