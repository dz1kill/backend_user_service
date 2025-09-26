import { AuthorizationDTO, RegistrationDTO, ResAuthorization } from "./types";
import { authorizationUser, registrationUser } from "./service";
import { Response } from "express";

export async function registration(
  req: RegistrationDTO,
  res: Response<string>
) {
  try {
    const { firstName, lastName, patronymic, dateOfBirth, email, password } =
      req.body;
    const result = await registrationUser(
      firstName,
      lastName,
      patronymic,
      dateOfBirth,
      email,
      password
    );
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function authorization(
  req: AuthorizationDTO,
  res: Response<ResAuthorization>
) {
  try {
    const { email, password } = req.body;
    const result = await authorizationUser(email, password);
    res
      .status(result.statusCode || 200)
      .json({ message: result.message, token: result.token });
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}
