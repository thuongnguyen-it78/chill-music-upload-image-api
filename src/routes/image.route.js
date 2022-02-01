import express from 'express'
import ImageController from '../controllers/image.controller'
import fileUploader from '../configs/cloudinary.config'
const router = express.Router()

router.post('/', fileUploader.single('image'), ImageController.uploadImage)

export default router
