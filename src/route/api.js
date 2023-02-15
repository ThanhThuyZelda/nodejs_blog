import express from "express";
import APIController from '../controller/APIController';
let router = express.Router();

const initAPIRoute = (app) => {

    router.get('/users', APIController.getAllUsers); //method GET --> READ data

    router.post('/create-user', APIController.createNewUser); //method POST --> CREATE data
    router.put('/update-user', APIController.updateUser); //method PUT --> UPDATE data
    router.delete('/delete-user/:id', APIController.deleteUser); // method DELETE --> DELET data

    return app.use('/api/v1', router)  //tien to /abc them truoc cac router
}


export default initAPIRoute;
// module.export = initWebRoute;