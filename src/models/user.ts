import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Role } from "./role";

@Table({ tableName: "users", timestamps: true, underscored: true })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  patronymic: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  dateOfBirth: Date;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: boolean;

  @BelongsTo(() => Role)
  role: Role;
}
