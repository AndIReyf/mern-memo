import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

const PORT = process.env.PORT || 5000
const URI = 'mongodb+srv://Andy:123qweasdzxc@mern-memo.r8cvh.mongodb.net/mern-memo?retryWrites=true&w=majority'

;(async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log('Server running on port:', PORT))
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
})()
