import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import serviceTemplate from '../templates/service.template';
import { HandlerBase } from './handlerBase';

export class ServiceHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    let entityName = moduleName.endsWith('s')
      ? moduleName.substr(0, moduleName.length - 1)
      : moduleName;
    return prettyPrint(
      serviceTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName),
        entityName: capitalize(entityName)
      })
    );
  }
}
