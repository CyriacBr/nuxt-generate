import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import serviceTemplate from '../templates/service.template';
import { HandlerBase } from './handlerBase';

export class ServiceHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    return prettyPrint(
      serviceTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName)
      })
    );
  }
}
