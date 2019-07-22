import { Command } from 'commander';
export declare class HandlerBase {
    static run(basePath: string, moduleName: string, cli: Command, prefix: string): Promise<{}>;
    static makeContent(moduleName: string, cli: Command): string;
}
