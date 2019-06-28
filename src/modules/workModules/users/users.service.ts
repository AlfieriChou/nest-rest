import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common'
import { User } from './user.entity'
import { genSalt, hash, compare } from 'bcrypt'
import { UserLoginRequestDto } from './dto/user-login-request.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { UserLoginResponseDto } from './dto/user-login-response.dto'
import { JwtPayload } from './auth/jwt-payload.model'
import { sign } from 'jsonwebtoken'
import { ConfigService } from '../../shared/config/config.service'

@Injectable()
export class UsersService {
  private readonly jwtPrivateKey: string

  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User,
    private readonly configService: ConfigService
  ) {
    this.jwtPrivateKey = this.configService.jwtConfig.privateKey
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne<User>({
      where: { email }
    })
  }

  async create(params: CreateUserDto): Promise<UserLoginResponseDto> {
    const exists = await this.getUserByEmail(params.email)
    if (exists) throw new HttpException('email exists.', HttpStatus.BAD_REQUEST)
    const user = new User()
    user.email = params.email
    const password = await hash(params.password, 10)
    user.password = password
    const result = await user.save()
    const token = await this.signToken(result)
    return {
      token: token,
      user
    }
  }

  async login(
    userLoginRequestDto: UserLoginRequestDto
  ): Promise<UserLoginResponseDto> {
    const email = userLoginRequestDto.email
    const password = userLoginRequestDto.password

    const user = await this.getUserByEmail(email)
    if (!user) {
      throw new HttpException(
        'Invalid email or password.',
        HttpStatus.BAD_REQUEST
      )
    }

    const isMatch = await compare(password, user.password)
    if (!isMatch) {
      throw new HttpException(
        'Invalid email or password.',
        HttpStatus.BAD_REQUEST
      )
    }

    const token = await this.signToken(user)
    return {
      token: token,
      user
    }
  }

  async signToken(user: User): Promise<string> {
    const payload: JwtPayload = {
      email: user.email
    }

    const token = sign(payload, this.jwtPrivateKey, {})
    return token
  }
}
