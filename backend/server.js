// packages
import express from "express"
import { v2 as cloudinary } from "cloudinary"

//models
import authRoutes from "./routes/auth.routes.js"
import postRoutes from "./routes/post.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectMongoDB from "./db/connectDb.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) //regular function that runs between req and response // to parse req.body // can't use req.body with out this middleware parser
app.use(express.urlencoded({ extended: true })) //to parse data from(urlencoded)
app.use(cookieParser())  //parse cookie

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`)
  connectMongoDB()
});

