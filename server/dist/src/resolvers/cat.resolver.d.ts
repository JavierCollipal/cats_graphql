import { CatService } from "../cat/cat.service";
import { Cat } from "../cat/cat.model";
export declare class CatResolver {
    private catService;
    constructor(catService: CatService);
    cat(): Promise<Cat[]>;
}
