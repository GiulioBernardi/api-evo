import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Funcionario } from '../entity/Funcionario';



export const getFuncionarios = async(request:Request, response: Response) => {
    const funcionario = await getRepository(Funcionario).find()
    return response.json(funcionario) 
}

export const getFuncionarioById =async(request:Request, response: Response) => {
    const { id } = request.params
    const funcionario = await getRepository(Funcionario).findOne({
        where: {
            id: parseInt(request.params.id, 10)}})
    return response.json(funcionario)
}



export const getFuncionarioByDepartamento = async(request:Request, response: Response) => {
    const funcionario = await getRepository(Funcionario).find({
        where:{
            departamentoId: parseInt(request.params.id, 10)
        },
    })
    return response.json(funcionario)
}

export const createFuncionario =async (request:Request, response: Response) => {
    const funcionario = await getRepository(Funcionario).create({departamentoId: parseInt(request.params.id) })
    
}


export const saveFuncionarioteste = async(request:Request, response:Response) => {
    const funcionario = await getRepository(Funcionario).save(request.body)
    response.json(funcionario)
}

export const saveFuncionario = async(request:Request, response:Response) => {
    const funcionario = await getRepository(Funcionario)
    const {nome, foto, rg, departamentoId} = request.body

    const func = funcionario.create({
        nome, 
        foto, 
        rg, 
        departamentoId:parseInt(request.params.id)
    })

    const erros = await validate(func)

    if(erros.length === 0){
        const res = await funcionario.save(func)
        return response.status(201).json(res)
    } else {
        response.status(400).json(erros)
    }
}

export const updateFuncionario = async(request:Request, response:Response) => {
    const { id } = request.params
    const funcionario = await getRepository(Funcionario).update(id, request.body)

    if(funcionario.affected === 1) {
        const funcionario = await getRepository(Funcionario).findOne({where: {id: parseInt(request.params.id, 10)}})
        return response.json(funcionario)
    }
    return response.status(404).json({message: "Funcionario não encontrado"})
}

export const deleteFuncionario = async(request:Request, response:Response) => {
    const {id} = request.params

    const funcionario = await getRepository(Funcionario).delete(id)

    if(funcionario.affected === 1) {
        const funcionario = await getRepository(Funcionario).findOne({where: {id: parseInt(request.params.id, 10)}})
        return response.json({message:"Funcionario deltado"})
    }
    return response.status(404).json({message: "Funcionario não encontrado"})
}