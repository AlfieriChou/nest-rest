import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatsModule } from './workModules/cats/cats.module'
import { SharedModule } from './shared/shared.module'
import { PostsModule } from './workModules/posts/posts.module'
import { UsersModule } from './workModules/users/users.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    UsersModule,
    CatsModule,
    SharedModule,
    PostsModule
  ]
})
export class ApplicationModule {}
