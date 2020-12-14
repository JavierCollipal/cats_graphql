export declare class CatInput {
    name?: string;
    breed?: string;
    age?: number;
}
export declare class Cat {
    name?: string;
    breed?: string;
    age?: number;
}
export declare abstract class IQuery {
    abstract cats(): Cat[] | Promise<Cat[]>;
}
export declare abstract class IMutation {
    abstract addCat(cat?: CatInput): Cat | Promise<Cat>;
}
