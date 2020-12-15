import { CatService } from "./cat.service";
import { CatDto } from "./cat.dto";
export declare class CatResolver {
    private catService;
    constructor(catService: CatService);
    cats(): Promise<import("./cat.model").Cat[]>;
    addCat(cat: CatDto): Promise<import("./cat.model").Cat>;
}
