import * as pkg from '../package.json';
import * as cli from 'commander';
import { NestGenerator } from './generator/nest';
import { EntityHandler } from './generator/entityHandler';
import { ServiceHandler } from './generator/serviceHandler';
import { ControllerHandler } from './generator/controllerHandler';
import { ModuleHandler } from './generator/moduleHandler';
const ora = require('ora');

const basePath = process.cwd();
cli
  .version(pkg.version)
  .option('-d, --dto', 'Use and generate DTOs')
  .option('-o, --orm <orm>', 'Process all files in the directory and output a single d.ts')
  .option('-e, --entity', 'Prompt for entity fields')
  .arguments('<name>')
  .action(function(name) {
    run(name);
  })
  .parse(process.argv);

async function run(name: string) {
  try {
    await runStep('Running nest cli', () => NestGenerator.run(basePath, name));
    await runStep('Generating entity file', () => EntityHandler.run(basePath, name, cli, 'entity'));
    await runStep('Generating service file', () =>
      ServiceHandler.run(basePath, name, cli, 'service')
    );
    await runStep('Generating controller file', () =>
      ControllerHandler.run(basePath, name, cli, 'controller')
    );
    await runStep('Generating module file', () => ModuleHandler.run(basePath, name, cli, 'module'));
  } catch (error) {
    console.log(error);
    console.log('Something went wrong. Exiting...');
  }
}

async function runStep(title: string, func: () => Promise<any>) {
  const spinner = ora(title).start();
  await func().catch(v => {
    spinner.fail();
    return Promise.reject(v);
  });
  spinner.succeed();
}
