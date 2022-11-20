import express from 'express';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';
import {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from '../controllers/user.controller.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('hello user, you are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, you are logged in and you can delete your account!');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, you are logged in and you can delete All account!');
// });

// GET ALL
router.get('/', verifyAdmin, getAllUsers);
// GET
router.get('/:id', verifyUser, getUser);
// DELETE
router.delete('/:id', verifyUser, deleteUser);
// UPDATE
router.put('/:id', verifyUser, updateUser);

export default router;
