import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const register = (req, res) => {
  const q = "SELECT * FROM user WHERE username = ? OR email = ?";
  try {
    db.query(q, [req.body.username, req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const q = "INSERT INTO user(`username`, `email`, `password`) VALUES(?)";
      const values = [req.body.username, req.body.email, hash];

      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("New user created successfully!");
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const login = (req, res) => {
  const q = "SELECT * FROM user where email = ?";
  try {
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length == 0) return res.status(404).json("User does not exist!");

      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );

      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");

      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];

      return res
        .cookie("access_token", token, {
          expiresIn: "1h",
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
