import {Injectable, Logger} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Cat, CatDocument} from "./cat.model";
import {Model} from "mongoose";

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name)
    private catModel: Model<CatDocument>
  ) {
  }

  async getAll(): Promise<Cat[]>{
    try {
     return  await this.catModel.find({}).exec();
    } catch (e){
      console.error(e)
    }
  }
  async createOne(cat: Cat): Promise<Cat>{
    try {
      return this.catModel.create(cat)
    } catch (e){
      console.error(e)
    }
 }
}
