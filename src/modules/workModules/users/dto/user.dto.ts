import { ApiModelProperty } from '@nestjs/swagger'

export class UserDto {
  @ApiModelProperty()
  id: number

  @ApiModelProperty()
  readonly email: string

  @ApiModelProperty()
  readonly password: string
}
