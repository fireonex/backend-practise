import express from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/productsRouter";
import {addressesRouter} from "./routes/adressesRouter";
import {Request, Response} from "express";
import {NextFunction} from "connect";


const app = express()
const port = process.env.PORT || 3008

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.someText = 'hello'
    next()
}
const authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.token === '123') {
        next()
    } else {
        res.send(401)
    }
}

let requestCounter = 0

const requestCounterMiddleware = (req: Request, res: Response, next: NextFunction) => {
    requestCounter++;
    next()
}

app.use(testMiddleware)
app.use(authGuardMiddleware)
app.use(requestCounterMiddleware)


app.get('/products', (req: Request, res: Response) => {
    // @ts-ignore
    const text = req.someText
    res.send({value: text + '!!!' + requestCounter})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})