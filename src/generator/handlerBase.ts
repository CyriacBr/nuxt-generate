import { Command } from 'commander';

import { dasherize } from '../helper';

import { join } from 'path';

import { writeFile } from 'fs';

export class HandlerBase {
  static run(basePath: string, moduleName: string, cli: Command, prefix: string) {
    const fileName = `${dasherize(moduleName)}.${prefix}.ts`;
    const path = join(basePath, dasherize(moduleName), fileName);
    return new Promise((resolve, reject) => {
      writeFile(path, this.makeContent(moduleName, cli), err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  static makeContent(moduleName: string, cli: Command) {
    return '';
  }
}
