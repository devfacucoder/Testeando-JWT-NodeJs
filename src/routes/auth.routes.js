import {Router} from 'express';
import * as authCtrl from '../controllers/auth.controller'
const routerAuth = Router();
import {checkExistingRole,checkExistingUser} from '../middlewares/verifysingup'
routerAuth.post('/singup',[checkExistingUser],authCtrl.singUp)
routerAuth.post('/singin',authCtrl.singIn)

export default routerAuth;
