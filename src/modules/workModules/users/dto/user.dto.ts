import { User } from './../user.entity'
import { ApiModelProperty } from '@nestjs/swagger'
import { Gender } from '../enum/gender'

export class UserDto {
  @ApiModelProperty()
  id: string

  @ApiModelProperty()
  readonly email: string

  @ApiModelProperty()
  readonly firstName: string

  @ApiModelProperty()
  readonly lastName: string

  @ApiModelProperty()
  readonly gender: Gender

  @ApiModelProperty()
  readonly birthday: string

  constructor(user: User) {
    this.id = user.id
    this.email = user.email
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.gender = user.gender
    this.birthday = user.birthday
  }
}
