import express from 'express'
import { createLauncher, deleteLauncherById, getAllLaunchers, getLauncherById } from '../ctrls/ctrls.js'
const router = express.Router()


router.get("/api/launchers",getAllLaunchers)
router.get("/api/launchers/:id",getLauncherById)
router.post("/api/launchers",createLauncher)
router.delete("/api/launchers/:id",deleteLauncherById)

export default router
