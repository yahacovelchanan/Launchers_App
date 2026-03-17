import express from 'express'
import { createUser, deleteUser, getUser, loginUser, updateUser } from '../ctrls/ctrls2.js'
import { checkIsAdmin, checkToken } from '../middleware/middleware.js'
const router = express.Router()


router.post("/api/auth/register/create",checkToken ,checkIsAdmin,createUser)
router.put("/api/auth/register/update",checkToken,checkIsAdmin,updateUser)
router.delete("/api/auth/register/delete/:id",checkToken,checkIsAdmin,deleteUser)
router.post("/api/auth/login",loginUser)
router.get("/api/auth/getUser",checkToken,getUser)

export default router