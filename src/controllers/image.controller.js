import { OK } from '../constants/httpStatusCode.constant'
import { singleResponse } from '../constants/response.constant'
import ImageService from '../services/image.service'

class ImageController {
  async uploadImage(req, res, next) {
    try {
      const data = await ImageService.uploadImage(req)
      return res.status(OK).json({ ...singleResponse, data })
    } catch (error) {
      next(error)
    }
  }
}

export default new ImageController()
