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

export async function getUser(searcherId: number, targetUserId: number) {
  await checkRole(searcherId);
  const user = await User.findOne({ where: { id: targetUserId } });
  if (!user) {
    throw { message: "User not found", statusCode: 404 };
  }

  return {
    data: user,
    statusCode: 200,
  };
}

export async function blockUser(searcherId: number, targetUserId: number) {
  await checkRole(searcherId);
  const [affectedCount] = await User.update(
    { isActive: false },
    {
      where: { id: targetUserId },
      returning: true,
    }
  );
  if (affectedCount === 0) {
    throw { message: "User not found", statusCode: 404 };
  }

  return {
    message: " User blocked",
    statusCode: 200,
  };
}
