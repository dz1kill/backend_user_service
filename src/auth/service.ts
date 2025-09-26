import { ROLE_USER } from "../constats/user";
import { Role } from "../models/role";
import { User } from "../models/user";
import {
  checkPasswordUser,
  checkUniqueEmail,
  checkUser,
  generateJwt,
  hashPassword,
} from "./helper";

export async function registrationUser(
  firstName: string,
  lastName: string,
  patronymic: string,
  dateOfBirth: Date,
  userEmail: string,
  passwordUser: string
) {
  const today = new Date();
  if (dateOfBirth > today) {
    throw {
      message: "Date of birth cannot be in the future",
      statusCode: 400,
    };
  }
  await checkUniqueEmail(userEmail);
  const roleId = await Role.findOne({
    where: { role: ROLE_USER },
    attributes: ["id"],
    raw: true,
    nest: true,
  });
  const resultHash = await hashPassword(passwordUser);
  await User.create({
    firstName,
    lastName,
    patronymic,
    dateOfBirth,
    email: userEmail,
    password: resultHash,
    roleId: roleId.id,
  });
  return {
    message: `User registered.`,
    statusCode: 201,
  };
}

export async function authorizationUser(emailUser: string, password: string) {
  const findUser = await User.findOne({ where: { email: emailUser } });
  checkUser(findUser);
  await checkPasswordUser(password, findUser.password);
  const token = generateJwt(findUser.id);
  return { message: "User is authorized", token, statusCode: 201 };
}
