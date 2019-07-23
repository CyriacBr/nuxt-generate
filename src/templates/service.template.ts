import { isTypeORM } from '../helper';

export default ({ cli, cName, dName, entityName }: any) => `
    ${isTypeORM(cli) &&
      `
      import { InjectRepository } from '@nestjs/typeorm';
      import { Repository, UpdateResult } from 'typeorm';`
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
            return this.repository.save(data);
        }

        createBulk(data: ${entityName}[]) {
          const tasks: Array<Promise<${entityName}>> = [];
          for (const item of data) {
            tasks.push(this.repository.save(item));
          }
          try {
            return Promise.all(tasks);
          } catch (error) {
            throw error;
          }
        }

        update(id: number, data: ${entityName}) {
            return this.repository.update(id, data);
        }

        updateBulk(data: ${entityName}[]) {
          const tasks: Array<Promise<UpdateResult>> = [];
          for (const item of data) {
            tasks.push(this.repository.update(item.id, item));
          }
          try {
            return Promise.all(tasks);
          } catch (error) {
            throw error;
          }
        }

        delete(id: number) {
            return this.repository.delete(id);
        }

        deleteBulk(idList: string) {
          const ids = idList.split(/\D/).map(value => parseInt(value, 10));
          return this.repository
            .createQueryBuilder()
            .delete()
            .from(${entityName})
            .whereInIds(ids)
            .execute();
        }
    }
`;
