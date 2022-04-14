import { Request, Response, Router } from 'express'
import { deleteDepartamento, getDepartamentoById, getDepartamentos, saveDepartamento, updateDepartamento } from './controller/DepartamentoController'
import { deleteFuncionario, getFuncionarioByDepartamento, getFuncionarios, getImageByFuncionario, saveFuncionario, saveFuncionarioteste, updateFuncionario, uploadImage } from './controller/FuncionarioController'
import { multerConfig } from './config/multer'

import * as multer from 'multer'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message : "Hello world!!"})
})

routes.get('/departamentos', getDepartamentos)
routes.post('/departamentos', saveDepartamento)
routes.get('/departamentos/:id', getDepartamentoById)
routes.put('/departamentos/:id', updateDepartamento)
routes.put('/departamentos/status/:id', deleteDepartamento)


routes.get('/funcionarios', getFuncionarios)
routes.get('/funcionarios', saveFuncionarioteste)
routes.post('/funcionarios/:id', saveFuncionario)
routes.get('/funcionarios/departamento/:id', getFuncionarioByDepartamento)
routes.put('/funcionarios/:id/upload-image', multer(multerConfig).single('foto'), uploadImage)
routes.put('/funcionarios/status/:id', deleteFuncionario)

routes.get('/funcionarios/:id/imagem', getImageByFuncionario)
routes.put('/funcionarios/:id', updateFuncionario)
// routes.delete('/funcionarios/:id', deleteFuncionario) <- PARA TESTE

export default routes