import { Max, MaxLength, Min, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from './Funcionario';

@Entity()
export class Departamento {


    @PrimaryGeneratedColumn({name:'cd_depto'})
    id: number;

    @Column({name:'nm_depto'})
    @MaxLength(25)
    @MinLength(4)
    nome: string;

    @Column({name:'sg_depto'})
    @MaxLength(3)
    @MinLength(3)
    sigla: string;

    @OneToMany(type => Funcionario, funcionario => funcionario.departamento, {eager: true, onDelete: 'CASCADE'})
    funcionarios: Array<Funcionario>;



}

// export const dataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "123456789",
//     database: "testedatabase",
//     entities: [Departamento],
//     entities: ["./projects/**/entities/*.ts"],
//     migrations: ["./projects/**/migrations/**.js"],
//     synchronize: true
// })

// await connection.connect(); // performs connection