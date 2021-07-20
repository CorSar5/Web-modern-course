const bodyParser = require('body-parser')
const cors = require('cors')

module.epxorts = app => {
    app.use(bodyParser.json())
    app.use(cors())
}