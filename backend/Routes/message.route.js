import express from 'express'
import { sendMessage, getMessage} from '../RouteControllers/messageroutercontroller.js'
import isLogin from '../Middleware/isLogin.js'

const router = express.Router()

router.post('/send/:id',isLogin , sendMessage)
router.get('/:id',isLogin , getMessage)



export default router