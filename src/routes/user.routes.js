import {Router} from 'express';

const routerUsers = Router();
import * as userCtrl from '../controllers/users.controllers';
import * as authJwt from '../middlewares/auth.jwt'
/* import * as singUsers from '../controllers/users.controllers' */
routerUsers.get('/',userCtrl.getUsers);

routerUsers.post('/',[authJwt.verifyToken,authJwt.itsAdmin],userCtrl.createUser)

routerUsers.put('/:idUpdate',[authJwt.verifyToken,authJwt.itsAdmin],userCtrl.updateUser);


export default routerUsers; 
