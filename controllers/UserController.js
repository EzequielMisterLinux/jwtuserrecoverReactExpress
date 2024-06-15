import UserModel from "../models/userModel.js";



const GetUserById = async(req, res) => {
    const id = req.params.id
    try {
        const getUser = await UserModel.findById(id)
        res.status(200).json(getUser)
        console.log("get user by id success");
    } catch (error) {
        console.error("has problem in the server", error);
    }
}

const GetUsers = async(req, res) => {
    
    try {
        const getUser = await UserModel.find()
        res.status(200).json(getUser)
        console.log("get users success");
    } catch (error) {
        console.error("has problem in the server", error);
    }
}

const CreateNewUser = async(req, res) => {

    const {name, middlename, mail, username, passw} = req.body

    try {
        
        const NewUserAdd = await UserModel({name, middlename, mail, username, passw})
        NewUserAdd.save()
        res.status(201).json(NewUserAdd)

        console.log("add user is successfully");
    } catch (error) {

        console.error("has problem ocurred in the server", error);
    }
}


const UpdateUserById = async(req, res) => {

    const {name, middlename, mail, username, passw} = req.body
    const id = req.params.id

    try {
        const updateUser = await UserModel.findByIdAndUpdate(id , {name, middlename, mail, username, passw}, {new:true})
        res.status(200).json(updateUser)
        console.log("user update is success");
    } catch (error) {
        console.error("has problem ocurred in ther server", error);
    }
}

export {CreateNewUser, GetUserById, GetUsers, UpdateUserById}