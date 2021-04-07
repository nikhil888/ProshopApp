import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import shopRoutes from './routes/shopRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()


app.get('/',(req,res) => {
    res.send('API is running')
})

app.use('/api/products',productRoutes)

app.use('/api/shops',shopRoutes)

app.use((req,res,next) => {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next()
})

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 8080

app.listen(PORT,'192.168.0.105',console.log(`Server running on port ${PORT}`))
