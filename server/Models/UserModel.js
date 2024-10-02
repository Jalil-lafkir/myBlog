import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserShema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    useremail: {
      type: String,
      require: true,
      unique: true,
    },
    userpassword: {
      type: String,
    },
    Avatar: {
      type: String,
      require: true,
      default:
        "https://i.pinimg.com/564x/3d/26/02/3d2602e1b11f161f7366c70b06fab7ed.jpg",
    },
    Admin: {
      type: Boolean,
      require: true,
      default: false,
    },
    Verified: {
      type: Boolean,
      require: true,
      default: false,
    },
    OTP: {
      type: String,
    },
  },
  { timestamps: true }
);

export const UserModel = model("User", UserShema);
