import { isTypeORM } from '../helper';

export default ({ cli, cName, dName }: any) => `
    ${isTypeORM(cli) &&
      `
      import { InjectRepository } from '@nestjs/typeorm';
      import { Repository } from 'typeorm';`
    }
    import { Injectable } from '@nestjs/common';
    import { ${cName} } from './${dName}.entity';

    @Injectable()
    export class ${cName}Service {
        constructor(
            @InjectRepository(${cName})
            private readonly repository: Repository<${cName}>,
        ) {}

        findAll() {
            return this.repository.find();
        }

        findById(id: number) {
            return this.repository.findOne(id);
        }

        create(data: ${cName}) {
            const item = new ${cName}();
            item.foo = 'bar';
            return this.repository.save(item);
        }

        update(id: number, data: ${cName}) {
            return this.repository.update(id, data);
        }

        delete(id: number) {
            return this.repository.delete(id);
        }
    }
`;
