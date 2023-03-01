import { getConnection } from "../database/database";
import { methods as userController } from "./user.controller";

const login = async (req, res) => {
  try {
    const connection = await getConnection();
    const { username, password } = req.body;
    const user =
      await connection.query(`SELECT * FROM users WHERE name ='${username}'
                                                            AND password ='${password}'`);

    res.status(200);
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(null);
  }
};

export const methods = {
  login,
};
