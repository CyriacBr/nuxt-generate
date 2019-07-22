import { Command } from 'commander';
import { capitalize, dasherize, prettyPrint } from '../helper';
import entityTemplate from '../templates/entity.template';
import { HandlerBase } from './handlerBase';

export class EntityHandler extends HandlerBase {
  static makeContent(moduleName: string, cli: Command) {
    return prettyPrint(
      entityTemplate({
        cli,
        cName: capitalize(moduleName),
        dName: dasherize(moduleName)
      })
    );
  }
}
