class ImageService {
  async uploadImage(data) {
    if (data.file) return { path: data.file.path }
    throw createError(BAD_REQUEST, 'Nothing image to upload')
  }
}

export default new ImageService()
