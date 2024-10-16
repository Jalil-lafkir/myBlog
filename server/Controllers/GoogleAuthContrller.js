import { UserModel } from "../Models/UserModel.js";
import { CreateToken, LoginHearders } from "../Utils/CreateToken.js";

export const GoogleAuthContrller = async (request, response) => {
  const { _json } = request.user;
  const user = { ..._json };

  if (!user) {
    return response.status(400).json({ message: "Authenticate Failed!" });
  }

  try {
    const isRegistred = await UserModel.findOne({
      useremail: user.email,
    }).exec();
    if (isRegistred) {
      const Token = CreateToken(isRegistred._id);
      return (
        response
          .status(200)
          .cookie("jwt", Token, LoginHearders)
          // .json({
          //   message: "Your Log in Has Been Successful!",
          //   user: isRegistred,
          // })
          .redirect("https://mybloog-qlv9.onrender.com")
      );
    }

    const NewUser = await UserModel.create({
      username: user.name,
      useremail: user.email,
      Avatar: user.picture,
      Verified: user.email_verified,
    });
    const Token = CreateToken(user._id);
    console.log(NewUser);
    return response
      .status(200)
      .cookie("jwt", Token, LoginHearders)
      .redirect("https://mybloog-qlv9.onrender.com");
    // .json({ message: "Your Sign up Has Been Successful!", user: NewUser });
  } catch (error) {
    console.log("Authenticate error:", error.message);
    response.status(500).json({ message: "Authenticate Failed!" });
  }
};
export default GoogleAuthContrller;
