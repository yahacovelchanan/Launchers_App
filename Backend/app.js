import express from 'express'
import cors from 'cors'
import launchersRouter from "./function/routes/routes.js"
const app = express()
const port = 3005

app.use(cors())
app.use(express.json())
app.use("/",launchersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
