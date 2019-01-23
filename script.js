#!/usr/bin/env node

const nodePlop = require('node-plop');
const { join } = require('path');

const plop = nodePlop(`${__dirname}/plopfile.js`);
const callerPath = process.cwd();

async function runGenerator(name) {
  let gen = plop.getGenerator(name);
  let params = await gen.runPrompts();
  return [gen, params];
}

async function runActions(gen, params) {
  try {
    let result = await gen.runActions(params);
    if (result.failures && result.failures.length) {
      console.log(result.failures);
      throw new Error('Failure');
    }
  } catch (error) {
    console.error('nuxt-generator encountered an error');
    console.error(error);
  }
}

async function generateComponent() {
  let [gen, params] = await runGenerator('component');
  params.path = join(callerPath,params.ownFolder ? `components/${params.name}` : 'components');
  runActions(gen, params);
}

async function generateModule() {
  let [gen, params] = await runGenerator('module');
  params.path = join(callerPath, `modules/${params.name}`);
  runActions(gen, params);
}

(async function() {
  const type = process.argv[2];
  if (type === 'c' || type === 'component') {
    await generateComponent();
  } else if (type === 'm' || type === 'module') {
    await generateModule();
  } else {
    console.error('Unknow resource');
  }
})();
