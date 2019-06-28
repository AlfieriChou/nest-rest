export interface JwtPayload {
  email: string
  iat?: Date
  exp: number
}
