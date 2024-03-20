const userRounter = require('./user')

const initRoutes = (app) => {
    app.use('/api/user', userRounter)
}

module.exports = initRoutes