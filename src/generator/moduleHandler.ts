import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import moduleTemplate from '../templates/module.template';
import { HandlerBase } from './handlerBase';

export class ModuleHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    let entityName = moduleName.endsWith('s')
      ? moduleName.substr(0, moduleName.length - 1)
      : moduleName;
    return prettyPrint(
      moduleTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName),
        entityName: capitalize(entityName)
      })
    );
  }
}
