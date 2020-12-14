import { Document } from "mongoose";
export declare type CatDocument = Cat & Document;
export declare class Cat {
    name: string;
    breed: string;
    age: number;
}
export declare const CatSchema: import("mongoose").Schema<any>;
