import { Request, Response, Router } from 'express'
import { deleteDepartamento, getDepartamentoById, getDepartamentos, saveDepartamento, updateDepartamento } from './controller/DepartamentoController'
import { createFuncionario, deleteFuncionario, getFuncionarioByDepartamento, getFuncionarioById, getFuncionarios, saveFuncionario, saveFuncionarioteste, updateFuncionario } from './controller/FuncionarioController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message : "Hello world!!"})
})

routes.get('/departamentos', getDepartamentos)
routes.post('/departamentos', saveDepartamento)
routes.get('/departamentos/:id', getDepartamentoById)
routes.put('/departamentos/:id', updateDepartamento)
routes.delete('/departamentos/:id', deleteDepartamento)

routes.get('/funcionarios', getFuncionarios)
routes.get('/funcionarios', saveFuncionarioteste)
// routes.post('/funcionarios', saveFuncionario)
routes.post('/funcionarios/:id', saveFuncionario)
routes.get('/funcionarios/:id', getFuncionarioById)
routes.get('/funcionarios/departamento/:id', getFuncionarioByDepartamento)
routes.put('/funcionarios/:id', updateFuncionario)
routes.delete('/funcionarios/:id', deleteFuncionario)
routes.delete('/funcionarios/:id', createFuncionario)

export default routes