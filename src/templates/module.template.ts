import { isTypeORM } from '../helper';

export default ({ cli, cName, dName, entityName }: any) => `
    import { Module } from '@nestjs/common';
    import { ${cName}Service } from './${dName}.service';
    import { ${cName}Controller } from './${dName}.controller';
    ${isTypeORM(cli) && `import { TypeOrmModule } from '@nestjs/typeorm';`}
    import { ${entityName} } from './${dName}.entity';

    @Module({
        imports: [${isTypeORM(cli) && `TypeOrmModule.forFeature([${entityName}])`}],
        providers: [${cName}Service],
        controllers: [${cName}Controller],
        exports: [${cName}Service${isTypeORM(cli) && `, TypeOrmModule`}]
    })
    export class ${cName}Module {}
`;
