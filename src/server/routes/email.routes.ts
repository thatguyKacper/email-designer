import { Router } from 'express';
import emailCtrl from '../controllers/email.controller';

const router = Router();

router.post('/generate', emailCtrl.generateEmail);
router.get('/emails', emailCtrl.getEmail);

export default router;
