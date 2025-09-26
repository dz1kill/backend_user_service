import { Role } from "../models/role";
import { User } from "../models/user";
import { checkRole } from "./helper";

export async function getAllUsers(id: number) {
  await checkRole(id);
  const allUsers = await User.findAll({
    include: [
      {
        model: Role,
        attributes: ["id", "role"],
      },
    ],
    attributes: {
      exclude: ["password"],
    },
  });
  return {
    data: allUsers,
    statusCode: 200,
  };
}
