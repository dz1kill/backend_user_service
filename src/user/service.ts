import { Role } from "../models/role";
import { User } from "../models/user";

export async function disableUser(id: number) {
  const [affectedCount] = await User.update(
    { isActive: false },
    {
      where: { id: id },
      returning: true,
    }
  );
  if (affectedCount === 0) {
    throw { message: "User not found", statusCode: 404 };
  }
  return {
    message: " You blocked",
    statusCode: 201,
  };
}

export async function getCurrentUser(id: number) {
  const user = await User.findOne({
    where: { id },
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
    data: user,
    statusCode: 201,
  };
}
