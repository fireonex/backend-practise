import express from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/productsRouter";
import {addressesRouter} from "./routes/adressesRouter";

const app = express()
const port = process.env.PORT || 3008

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})