import createHttpError from 'http-errors'
import { BAD_REQUEST } from '../constants/httpStatusCode.constant'

class ImageService {
  async uploadImage(data) {
    if (data.file) return { path: data.file.path }
    throw createHttpError(BAD_REQUEST, 'Nothing image to upload')
  }
}

export default new ImageService()
