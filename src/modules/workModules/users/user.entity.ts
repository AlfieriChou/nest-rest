import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  AutoIncrement,
  IsEmail
} from 'sequelize-typescript'

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number

  @IsEmail
  @Column
  email: string

  @Column
  password: string

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt: Date

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deletedAt: Date
}
