import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minLength: 8
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId, //A follower must have this type of objectid
      ref: "User",//will be a reference to usermodel 
      default: []//user must have 0 follower and following
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId, //A follower must have this type of objectid
      ref: "User",//will be a reference to usermodel
      default: []
    },
  ],
  profileImg: {
    type: String,
    default: ""
  },
  bio: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: ""
  }
}, { timestamps: true })//timestamps is for getting member since account created date and more

const User = mongoose.model("User", userSchema) //users
export default User
