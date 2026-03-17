import express from 'express'
import { createLauncher, deleteLauncherById, getAllLaunchers, getLauncherById, launcherDestroyed } from '../ctrls/ctrls.js'
import { checkIsModiin, checkToken } from '../middleware/middleware.js'
const router = express.Router()


router.get("/api/launchers",checkToken,getAllLaunchers)
router.get("/api/launchers/:id",checkToken,checkIsModiin,getLauncherById)
router.post("/api/launchers",checkToken,checkIsModiin,createLauncher)
router.delete("/api/launchers/:id",checkToken,checkIsModiin,deleteLauncherById)
router.put("/api/launchers",checkToken,launcherDestroyed)

export default router
