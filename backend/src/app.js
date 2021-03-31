console.log('hello')
// requiring the modules we installed through npm install in order to use in backend
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Building express server using the function express
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req,res)=>{
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081)