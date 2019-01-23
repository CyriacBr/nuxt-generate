const path = require('path');

module.exports = function(plop) {
  plop.addHelper('absPath', function(p) {
    return path.resolve(plop.getPlopfilePath(), p);
  });

  plop.addHelper('ifContains', function(arr, element, options) {
    return arr.includes(element) ? options.fn(this) : options.inverse(this);
  });

  plop.setGenerator('component', {
    description: 'Generate a vue component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name'
      },
      {
        type: 'confirm',
        name: 'ownFolder',
        message: 'Generate its own folder?',
        default: true
      },
      {
        type: 'checkbox',
        name: 'options',
        message: 'Options',
        choices: [
          { name: 'Use Nuxt', value: 'nuxt', checked: true },
          { name: 'Use Typescript', value: 'typescript' },
          { name: 'Use a store', value: 'store' }
        ]
      }
    ],
    actions: function(data) {
      var actions = [
        {
          type: 'add',
          path: '{{absPath path}}/{{camelCase name}}.vue',
          templateFile: 'templates/component.handlebars'
        }
      ];

      if (data.options.includes('typescript')) {
        actions.push({
          type: 'add',
          path: '{{absPath path}}/{{camelCase name}}.spec.ts',
          templateFile: 'templates/component.spec-ts.handlebars'
        });
      } else {
        actions.push({
          type: 'add',
          path: '{{absPath path}}/{{camelCase name}}.spec.js',
          templateFile: 'templates/component.spec-js.handlebars'
        });
      }

      return actions;
    }
  });

  plop.setGenerator('module', {
    description: 'Generate a nuxt module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name'
      },
      {
        type: 'checkbox',
        name: 'folders',
        message: 'Folder options',
        choices: [
          { name: 'pages', value: 'pages', checked: true },
          { name: 'components', value: 'components', checked: true },
          { name: 'middleware', value: 'middleware' },
          { name: 'store', value: 'store' }
        ]
      },
      {
        type: 'checkbox',
        name: 'options',
        message: 'General options',
        choices: [
          { name: 'Use Nuxt', value: 'nuxt', checked: true },
          { name: 'Use Typescript', value: 'typescript' },
          { name: 'Use a store', value: 'store' }
        ]
      }
    ],
    actions: function(data) {
      var actions = [];

      if (data.folders.includes('pages')) {
        actions.push({
          type: 'add',
          path: '{{absPath path}}/pages/index.vue',
          templateFile: 'templates/component.handlebars'
        });

        if (data.options.includes('typescript')) {
          actions.push({
            type: 'add',
            path: '{{absPath path}}/pages/index.spec.ts',
            templateFile: 'templates/component.spec-ts.handlebars'
          });
        } else {
          actions.push({
            type: 'add',
            path: '{{absPath path}}/pages/index.spec.js',
            templateFile: 'templates/component.spec-js.handlebars'
          });
        }
      }

      if(data.folders.includes('components')) {
        actions.push({
          type: 'add',
          path: '{{absPath path}}/components/README.md',
          templateFile: 'templates/components.md.handlebars'
        });
      }

      for (const name of ['middleware', 'store']) {
        if (data.folders.join(',').match(name)) {
          const ext = data.options.includes('typescript') ? 'ts' : 'js';
          actions.push({
            type: 'add',
            path: `{{absPath path}}/${name}/{{camelCase name}}.${name.replace(/s$/, '')}.${ext}`,
            templateFile: `templates/${name}-${ext}.handlebars`
          });
        }
      }

      return actions;
    }
  });
};
