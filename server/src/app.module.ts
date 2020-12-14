import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from 'path'
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    CatModule,
    MongooseModule.forRoot('mongodb://localhost/cat_graphql'),
    GraphQLModule.forRoot({
    include: [CatModule],
    typePaths: ['./**/*.graphql'],
      definitions: {
      path: join(process.cwd(),'src/graphql.ts'),
      outputAs: 'class'
      }
  }),
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
