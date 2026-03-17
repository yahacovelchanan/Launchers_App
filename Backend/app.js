import express from 'express'
import cors from 'cors'
import launchersRouter from "./function/routes/routes.js"
import usersRouter from './function/routes/routes2.js'
const app = express()
const port = 3005

app.use(cors())
app.use(express.json())
app.use("/",launchersRouter)
app.use("/",usersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
