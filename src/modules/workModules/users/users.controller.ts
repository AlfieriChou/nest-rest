import { UserLoginRequestDto } from './dto/user-login-request.dto'
import { Controller, Post, Body, HttpCode } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { ApiUseTags, ApiOkResponse } from '@nestjs/swagger'
import { UserLoginResponseDto } from './dto/user-login-response.dto'

@Controller('v1')
@ApiUseTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @ApiOkResponse({ type: UserLoginResponseDto })
  async register(
    @Body() createUserDto: CreateUserDto
  ): Promise<UserLoginResponseDto> {
    return await this.usersService.create(createUserDto)
  }

  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ type: UserLoginResponseDto })
  login(
    @Body() userLoginRequestDto: UserLoginRequestDto
  ): Promise<UserLoginResponseDto> {
    return this.usersService.login(userLoginRequestDto)
  }
}
