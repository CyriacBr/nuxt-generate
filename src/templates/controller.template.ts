import { isTypeORM } from '../helper';

export default ({ cli, cName, dName }: any) => `
    import { Controller, Param, Body, Get, Post, Put, Patch, Delete } from '@nestjs/common';
    import { ${cName}Service } from './${dName}.service';
    import { ${cName} } from './${dName}.entity';

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
        create(@Body() data: ${cName}) {
            return this.service.create(data);
        }

        @Put(':id')
        @Patch(':id')
        update(@Param('id') id: string, @Body() data: ${cName}) {
            return this.service.update(Number(id), data);
        }

        @Delete(':id')
        delete(@Param('id') id: string) {
            return this.service.delete(Number(id));
        }
    }
`;
