import express from 'express';
import * as dotenv from 'dotenv';
const PORT = process.env.PORT || 3001
dotenv.config()



const run = () => {
    const app = express()
    app.get(`/`, (req: express.Request, res: express.Response) => {res.status(200).send({name: 'NAME'})})
    app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
}

run()