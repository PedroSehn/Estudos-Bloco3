import { Router } from 'express';
import UserController from '../controllers/user.controller'

const router = Router();

const userController = new UserController();

router.get('/', userController.getAll)
router.get('/:id', userController.getById)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)

export default router