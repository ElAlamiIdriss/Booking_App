import express from 'express';
import {
  getAllRooms,
  getRoom,
  createRoom,
  deleteRoom,
  updateRoom,
} from '../controllers/room.controller.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// GET ALL
router.get('/', verifyAdmin, getAllRooms);
// GET
router.get('/:id', getRoom);
// CREATE
router.post('/:hotelid', verifyAdmin, createRoom);
// DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
// UPDATE
router.put('/:id', verifyAdmin, updateRoom);

export default router;
