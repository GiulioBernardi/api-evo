import { MaxLength, MinLength } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Departamento } from './Departamento';


@Entity()
export class Funcionario {


    @PrimaryGeneratedColumn({name:'cd_funcionario'})
    id: number;

    @Column({name: 'nm_funcionario'})
    @MaxLength(55)
    @MinLength(3)
    nome: string;

    //COMO QUE GUARDA FOTO?
    @Column({name: 'ds_foto'})
    @MaxLength(1) //excluir isso depois e não deixar nenhuma validação
    @MinLength(1) //excluir isso depois e não deixar nenhuma validação
    foto: string;

    @Column({name: 'ds_rg'})
    @MaxLength(12)
    @MinLength(8)     
    rg: string;


    @Column({name:'departamentoId'})
    departamentoId: number

    @ManyToOne(type => Departamento, departamento => departamento.funcionarios)
    departamento:number

}
