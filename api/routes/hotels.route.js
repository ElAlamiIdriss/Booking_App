import express from 'express';
import {
  getAllHotels,
  getHotel,
  createHotel,
  deleteHotel,
  updateHotel,
} from '../controllers/hotel.controller.js';

import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// GET ALL
router.get('/', getAllHotels);
// GET
router.get('/:id', getHotel);
// CREATE
router.post('/', verifyAdmin, createHotel);
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel);
// UPDATE
router.put('/:id', verifyAdmin, updateHotel);

export default router;
