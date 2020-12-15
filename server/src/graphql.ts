
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CatInput {
    name: string;
    breed: string;
    age: number;
}

export class Cat {
    name?: string;
    breed?: string;
    age?: number;
}

export abstract class IQuery {
    abstract cats(): Cat[] | Promise<Cat[]>;
}

export abstract class IMutation {
    abstract addCat(cat?: CatInput): Cat | Promise<Cat>;
}
