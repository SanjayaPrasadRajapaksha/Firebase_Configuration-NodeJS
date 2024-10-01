import * as abutUsController from '../Controllers/aboutUs.controller.js';
import express from 'express';
const router = express.Router();
import upload from "../Configs/multer.config.js";

router.post('/create', upload.single('imageURL'), abutUsController.createAboutUs);
router.get('/getAll' , abutUsController.getAllAboutUs);
router.get('/getById/:id', abutUsController.getAboutUsById);
router.put('/update/:id', upload.single('imageURL'), abutUsController.updateAboutUs);
router.delete('/delete/:id', abutUsController.deleteAboutUs);


export default router;