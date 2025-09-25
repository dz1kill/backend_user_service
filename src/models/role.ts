import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { User } from "./user";

@Table({ tableName: "roles", timestamps: true, underscored: true })
export class Role extends Model<Role> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  role: string;

  @HasMany(() => User)
  users: User[];
}
