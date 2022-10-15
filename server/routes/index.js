import express from 'express';
import getAllRooms from '../controllers/getAllRooms.js';

const router = express.Router();

router.get('/',getAllRooms);

export default router;