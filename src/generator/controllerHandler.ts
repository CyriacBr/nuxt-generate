import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import controllerTemplate from '../templates/controller.template';
import { HandlerBase } from './handlerBase';

export class ControllerHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    let entityName = moduleName.endsWith('s')
      ? moduleName.substr(0, moduleName.length - 1)
      : moduleName;
    return prettyPrint(
      controllerTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName),
        entityName: capitalize(entityName)
      })
    );
  }
}
