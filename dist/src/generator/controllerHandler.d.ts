import { Command } from 'commander';
import { HandlerBase } from './handlerBase';
export declare class ControllerHandler extends HandlerBase {
    static makeContent(moduleName: string, cli: Command): string;
}
