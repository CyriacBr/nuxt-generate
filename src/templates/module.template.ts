import { isTypeORM } from '../helper';

export default ({ cli, cName, dName }: any) => `
    import { Module } from '@nestjs/common';
    import { ${cName}Service } from './${dName}.service';
    import { ${cName}Controller } from './${dName}.controller';
    ${isTypeORM(cli) && `import { TypeOrmModule } from '@nestjs/typeorm';`}
    import { ${cName} } from './${dName}.entity';

    @Module({
        imports: [${isTypeORM(cli) && `TypeOrmModule.forFeature([${cName}])`}],
        providers: [${cName}Service],
        controllers: [${cName}Controller],
    })
    export class ${cName}Module {}
`;
