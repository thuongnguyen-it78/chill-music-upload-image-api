import imageRoute from './image.route'

function route(app) {
  app.use('/v1/images', imageRoute)
}

export default route
