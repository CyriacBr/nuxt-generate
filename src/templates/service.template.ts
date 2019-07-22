import { isTypeORM } from '../helper';

export default ({ cli, cName, dName, entityName }: any) => `
    ${isTypeORM(cli) &&
      `
      import { InjectRepository } from '@nestjs/typeorm';
      import { Repository } from 'typeorm';`
    }
    import { Injectable } from '@nestjs/common';
    import { ${entityName} } from './${dName}.entity';

    @Injectable()
    export class ${cName}Service {
        constructor(
            @InjectRepository(${entityName})
            private readonly repository: Repository<${entityName}>,
        ) {}

        findAll() {
            return this.repository.find();
        }

        findById(id: number) {
            return this.repository.findOne(id);
        }

        create(data: ${entityName}) {
            const item = new ${entityName}();
            item.foo = 'bar';
            return this.repository.save(item);
        }

        update(id: number, data: ${entityName}) {
            return this.repository.update(id, data);
        }

        delete(id: number) {
            return this.repository.delete(id);
        }
    }
`;
