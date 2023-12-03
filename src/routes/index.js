import express from 'express';
import {
  createUserController,
  authenticateUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from '../controllers/userController.js';

import {
  createCourseController,
  getAllCoursesController,
  getCourseByIdController,
  updateCourseController,
  deleteCourseController,
} from '../controllers/courseController.js';

import {
  createMaterialController,
  getAllMaterialsController,
  getMaterialByIdController,
  updateMaterialController,
  deleteMaterialController,
} from '../controllers/materialController.js';



const router = express.Router();

router.post('/', createUserController);

router.post('/authenticate', authenticateUserController);

router.get('/', getAllUsersController);

router.get('/:id', getUserByIdController);

router.put('/:id', updateUserController);

router.delete('/:id', deleteUserController);

// Course controller

router.post('/course', createCourseController);

router.get('/course', getAllCoursesController);

router.get('/course/:id', getCourseByIdController);

router.put('/course/:id', updateCourseController);

router.delete('/course/:id', deleteCourseController);

// Material controller

router.post('/material', createMaterialController);

router.get('/material', getAllMaterialsController);

router.get('/material/:id', getMaterialByIdController);

router.put('/material/:id', updateMaterialController);

router.delete('/material/:id', deleteMaterialController);


export default router;