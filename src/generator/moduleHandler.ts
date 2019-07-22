import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import moduleTemplate from '../templates/module.template';
import { HandlerBase } from './handlerBase';

export class ModuleHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    return prettyPrint(
      moduleTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName)
      })
    );
  }
}
