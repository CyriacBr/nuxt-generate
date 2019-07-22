import { Command } from 'commander';
import { HandlerBase } from './handlerBase';
export declare class ModuleHandler extends HandlerBase {
    static makeContent(moduleName: string, cli: Command): string;
}
