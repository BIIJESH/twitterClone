import express from "express"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectMongoDB from "./db/connectDb.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //regular function that runs between req and response // to parse req.body // can't use req.body with out this middleware parser
app.use(express.urlencoded({ extended: true })) //to parse data from(urlencoded)
app.use(cookieParser())  //parse cookie

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`)
  connectMongoDB()
});

