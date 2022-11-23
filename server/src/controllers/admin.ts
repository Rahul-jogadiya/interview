import { Request, Response } from "express";
import { user } from "../database";
import jwt from "jsonwebtoken";

export const adminRegister = async (req: Request, res: Response) => {
  let body = req.body;
  try {
    let isExist = await user.findOne({ where: { email: body.email } });
    if (isExist) {
      return res
        .status(200)
        .json({ msg: "user already registered", Data: isExist });
    } else {
      let response = await user.create({ ...body, role: "admin" });
      if (response) {
        return res.status(200).json({ msg: "User Registered", Data: response });
      } else {
        return res
          .status(401)
          .json({ msg: "Oops! something went wrong", Data: null });
      }
    }
  } catch (error) {
    console.log("error :>> ", error);
    return res.status(500).json({ msg: "Internal Server Error", Data: null });
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  let body = req.body;
  try {
    let isExist: any = await user.findOne({
      where: { email: body.email, password: body.password },
    });
    if (isExist.role == "admin") {
      return res
        .status(406)
        .json({ msg: "you are not allow to login", Data: null });
    }
    if (!isExist) {
      return res.status(200).json({ msg: "user not Found", Data: isExist });
    } else {
      let token = jwt.sign(
        {
          id: isExist.id,
          role: isExist.role,
          status: "Login",
        },
        "SampleToken"
      );
      return res
        .status(200)
        .json({ msg: "User Login successFully", Data: { isExist, token } });
    }
  } catch (error) {
    console.log("error :>> ", error);
    return res.status(500).json({ msg: "Internal Server Error", Data: null });
  }
};
