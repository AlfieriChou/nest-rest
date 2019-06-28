import { UserDto } from './user.dto'
import { ApiModelProperty } from '@nestjs/swagger'

export class UserLoginResponseDto {
  @ApiModelProperty()
  token: string

  @ApiModelProperty()
  user: UserDto
}
