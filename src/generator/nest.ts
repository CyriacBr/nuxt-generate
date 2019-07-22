import { exec } from 'child_process';

export class NestGenerator {
  static run(basePath: string, moduleName: string) {
    return new Promise((resolve, reject) => {
      exec(
        `cd "${basePath}" && nest g module ${moduleName} && nest g controller ${moduleName} && nest g service ${moduleName}`,
        err => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }
}
