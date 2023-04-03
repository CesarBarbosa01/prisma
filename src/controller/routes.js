import{ Router } from "express"
import UserController from "./UserController"

const router = Router()

router.post("/user", UserController.createUser)
router.get("/users", )