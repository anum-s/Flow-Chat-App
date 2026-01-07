import express from 'express'
import isLogin from '../Middleware/isLogin.js'
import { getUserBySearch , getCurrentChatter} from '../RouteControllers/userroutercontroller.js'

const router = express.Router()

router.get('/search',isLogin, getUserBySearch)
router.get('/currentchatters',isLogin, getCurrentChatter)


export default router