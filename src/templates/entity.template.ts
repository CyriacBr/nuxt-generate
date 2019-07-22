import { isTypeORM } from '../helper';

export default ({ cli, cName, dName }: any) => `
    ${isTypeORM(cli) && `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'`}
    import { IsNotEmpty } from 'class-validator';
    
    ${isTypeORM(cli) && '@Entity()'}
    export class ${cName} {
        ${isTypeORM(cli) && '@PrimaryGeneratedColumn()'}
        id: number;
        
        ${isTypeORM(cli) && '@Column()'}
        @IsNotEmpty()
        foo: string;
    }
`;
