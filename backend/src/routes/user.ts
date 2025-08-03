import express from 'express';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// All routes are protected
router.use(protect);

// Add user-specific routes here
// Example: router.get('/profile', getUserProfile);

export default router;