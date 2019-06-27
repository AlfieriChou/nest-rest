import { ApiModelProperty } from '@nestjs/swagger'

export class ResponseCatDto {
  @ApiModelProperty({
    type: String,
    required: false,
    description: 'name'
  })
  readonly name: string

  @ApiModelProperty({
    type: Number,
    required: false,
    description: 'age'
  })
  readonly age: number

  @ApiModelProperty({
    type: String,
    required: false,
    description: 'breed'
  })
  readonly breed: string
}
