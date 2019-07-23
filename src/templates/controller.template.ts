import { isTypeORM } from '../helper';

export default ({ cli, cName, dName, entityName }: any) => `
    import { Controller, Param, Body, Get, Post, Put, Patch, Delete } from '@nestjs/common';
    import { ${cName}Service } from './${dName}.service';
    import { ${entityName} } from './${dName}.entity';

    @Controller('${dName}')
    export class ${cName}Controller {
        constructor(private readonly service: ${cName}Service) {}

        @Get()
        findAll() {
            return this.service.findAll();
        }

        @Get(':id')
        findById(@Param('id') id: string) {
            return this.service.findById(Number(id));
        }

        @Post()
        create(@Body() data: ${entityName}) {
            return this.service.create(data);
        }

        @Post('bulk')
        createBulk(@Body() data: Array<${entityName}>) {
          return this.service.createBulk(data);
        }

        @Put(':id')
        @Patch(':id')
        update(@Param('id') id: string, @Body() data: ${entityName}) {
            return this.service.update(Number(id), data);
        }

        @Put('bulk')
        @Patch('bulk')
        updateBulk(@Body() data: Array<${entityName}>) {
          return this.service.updateBulk(data);
        }

        @Delete(':id')
        delete(@Param('id') id: string) {
            return this.service.delete(Number(id));
        }

        @Delete('bulk/:ids')
        deleteBulk(@Param('ids') idList: string) {
          return this.service.deleteBulk(idList);
        }
    }
`;
