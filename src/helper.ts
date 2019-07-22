import { Command } from 'commander';
const prettier = require('prettier');

export enum ORMOption {
  None,
  TypeORM
}

export function noORMSelected(cli: Command) {
  return !cli.orm;
}

export function isTypeORM(cli: Command) {
  return (cli.orm as string).replace(/\s/g, '').toLowerCase() === 'typeorm';
}

export function dasherize(str: string) {
  return str.replace(/[A-Z]/g, (char, index) => {
    return (index !== 0 ? '-' : '') + char.toLowerCase();
  });
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.substr(1, str.length - 1);
}

export function prettyPrint(str: string) {
  return prettier.format(str, { parser: 'typescript' });
}
