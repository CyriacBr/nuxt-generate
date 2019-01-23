# nuxt-generate
A simple package to general Nuxt components and files. It is a bit opinionated but is also usable for Vue projects. It differs from other vue generator packages by supporting **typescript** and generating a **unit testing** file.

It is based on [`plop`](https://github.com/amwmedia/plop).

## setup
Install it globally: `npm i -g nuxt-generate`.

## Commands
### nuxt-generate component MyComponent

Generate a `vue` file with the following options:
* Use Typescript: If selected, the generate component will be based on `vue-class-component`, or `nuxt-class-component` if Nuxt if checked.
* Use Nuxt: See above.
* Use a store: If typescript is selected, the component will be generated with imports from `vuex-class`.
* Generate its own folder: The component will be wrapped inside a folder of its own name.

### Simple VueJS output example
* `components/myComponent.vue`
```html
<template>
    <p>Hello from MyComponent</p>
</template>

<script>
export default {
    name: 'MyComponent',
    components: {},
    created() {},
    mounted() {},
    data() {
        return {
            foo: 'bar'
        };
    }
}
</script>

<style lang="scss">
</style>
```
* `components/myComponent.spec.ts`
```javascript
import { shallowMount } from '@vue/test-utils';
import MyComponent from './myComponent.vue';

describe('MyComponent.vue', () => {
  it('sets the correct default data', () => {
    const wrapper = shallowMount(MyComponent, {});
    const defaultData = wrapper.data();
    expect(defaultData.foo).toMatch('bar');
  })
});
```

### Nuxt output example with store
* `components/myComponent.vue`
```html
<template>
    <p>Hello from MyComponent</p>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

@Component({})
export default class MyComponent extends Vue {
    foo = 'bar';
    created() {}
    mounted() {}
}
</script>

<style lang="scss">
</style>
```
### nuxt-generate module MyModule

This opinionated command generates a module based on [`nuxt-modular`](https://github.com/cknow/nuxt-modular) structure. It generates:
* `pages/index.vue`
* and the following folders: `components`, `middleware`, `store`.

## License
MIT.