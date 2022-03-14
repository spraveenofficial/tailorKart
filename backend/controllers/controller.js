import userModel from "../models/user.js";
import token from "../services/token-services.js";
class Controller {
  async signup(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
        statusCode: 400,
        success: false,
      });
    }
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        statusCode: 400,
        success: false,
      });
    }
    const newUser = await userModel.create({ name, email, password });
    return res.status(200).json({
      message: "User created successfully",
      statusCode: 200,
      success: true,
      token: token(newUser._id),
    });
  }
  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all the fields",
        statusCode: 400,
        success: false,
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        statusCode: 400,
        success: false,
      });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect password",
        statusCode: 400,
        success: false,
      });
    }
    return res.status(200).json({
      message: "User logged in successfully",
      statusCode: 200,
      success: true,
      token: token(user._id),
    });
  }
  async verifyUser(req, res) {
    const { id } = req.data;
    // Verify userToken
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        statusCode: 400,
        success: false,
      });
    }
    return res.status(200).json({
      message: "User verified successfully",
      statusCode: 200,
      success: true,
      data: {
        name: user.name,
        email: user.email,
      },
    });
  }
  async categoryWise(req, res) {
    
  }
}

export default new Controller();
