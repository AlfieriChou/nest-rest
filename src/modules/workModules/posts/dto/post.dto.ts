import { ApiModelProperty } from '@nestjs/swagger'

export class PostDto {
  @ApiModelProperty({
    type: String,
    required: false,
    description: 'user id'
  })
  readonly userId: string

  @ApiModelProperty({
    type: Number,
    required: false,
    description: 'title'
  })
  readonly title: number

  @ApiModelProperty({
    type: String,
    required: false,
    description: 'context'
  })
  readonly context: string
}
