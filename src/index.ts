import express from 'express'
import {productsRouter} from "./routes/productsRouter";
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser())
const port = process.env.PORT || 3008

app.use('/products', productsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})