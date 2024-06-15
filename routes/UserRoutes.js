import { 
    CreateNewUser , 
    GetUserById, 
    GetUsers,
    UpdateUserById
} from "../controllers/UserController.js";

import express from 'express'

const rutas = express.Router()

/*end points */


rutas.post('/users', CreateNewUser)
rutas.get('/users/:id', GetUserById)
rutas.get('/users', GetUsers)
rutas.put('/users/:id', UpdateUserById)

export default rutas

