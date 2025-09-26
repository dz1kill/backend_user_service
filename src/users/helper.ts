import { ROLE_ADMIN } from "../constats/user";
import { Role } from "../models/role";
import { User } from "../models/user";

export async function checkRole(id: number) {
  const userWithRole = await User.findOne({
    where: { id },
    include: [
      {
        model: Role,
        attributes: ["role"],
      },
    ],
    raw: true,
    nest: true,
  });
  if (userWithRole.role.role !== ROLE_ADMIN) {
    throw { message: "Insufficient permissions", statusCode: 403 };
  }
}
