import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Cat, CatSchema} from "./cat.model";
import {CatResolver} from "./cat.resolver";

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema}])],
  providers: [CatService, CatResolver]
})
export class CatModule {}
