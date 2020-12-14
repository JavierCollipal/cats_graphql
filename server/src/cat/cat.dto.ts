import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class CatDto {
 @Field(type => String)
 name: string

 @Field(type => String)
  breed: string

  @Field(type => Int)
  age: number
}
