import { Cat, CatDocument } from "./cat.model";
import { Model } from "mongoose";
export declare class CatService {
    private catModel;
    constructor(catModel: Model<CatDocument>);
    getAll(): Promise<Cat[]>;
    createOne(cat: Cat): Promise<Cat>;
}
