import { Command } from 'commander';
import { HandlerBase } from './handlerBase';
export declare class ServiceHandler extends HandlerBase {
    static makeContent(moduleName: string, cli: Command): any;
}
