import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import entityTemplate from '../templates/entity.template';
import { HandlerBase } from './handlerBase';

export class EntityHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    let entityName = moduleName.endsWith('s')
      ? moduleName.substr(0, moduleName.length - 1)
      : moduleName;
    return prettyPrint(
      entityTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName),
        entityName: capitalize(entityName)
      })
    );
  }
}
