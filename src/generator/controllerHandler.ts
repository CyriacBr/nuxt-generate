import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import controllerTemplate from '../templates/controller.template';
import { HandlerBase } from './handlerBase';

export class ControllerHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    return prettyPrint(
      controllerTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName)
      })
    );
  }
}
