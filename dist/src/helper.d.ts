import { Command } from 'commander';
export declare enum ORMOption {
    None = 0,
    TypeORM = 1
}
export declare function noORMSelected(cli: Command): boolean;
export declare function isTypeORM(cli: Command): boolean;
export declare function dasherize(str: string): string;
export declare function capitalize(str: string): string;
export declare function prettyPrint(str: string): any;
