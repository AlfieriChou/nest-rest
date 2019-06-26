import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  Length,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  IsNumeric
} from 'sequelize-typescript'

@Table({
  tableName: 'cats'
})
export class Cat extends Model<Cat> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number

  @Length({
    min: 3,
    max: 60,
    msg: `The length of post title can't be shorter than 3 and longer than 60 `
  })
  @Column
  name: string

  @IsNumeric
  @Column
  age: number

  @Column
  breed: string

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
