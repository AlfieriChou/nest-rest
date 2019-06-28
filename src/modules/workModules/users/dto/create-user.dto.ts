import {
  IsString,
  IsEmail,
  IsEnum,
  IsISO8601,
  IsOptional,
  MinLength
} from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiModelProperty()
  @IsEmail()
  readonly email: string

  @ApiModelProperty()
  @IsString()
  @MinLength(6)
  readonly password: string
}
