const controller = require("../controllers/userController")

module.exports = (app) => {
    app.post('/user',controller.create)
}