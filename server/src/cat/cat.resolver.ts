import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {CatService} from "./cat.service";
import {CatDto} from "./cat.dto";

@Resolver('Cat')
export class CatResolver {
  constructor(private catService: CatService) {
  }

  @Query()
  async cats(){
    return this.catService.getAll()
  }

  @Mutation()
  async addCat(@Args('cat') cat: CatDto){
    return this.catService.createOne(cat);
  }
}
