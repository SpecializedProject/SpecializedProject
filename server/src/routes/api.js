const express = require('express');
const router = express.Router();
const { APIGetAllUsers, APICreateNewUser, APIUpdateUser, APIDeleteUser, APIGetAllTopics, APIDeleteLesson, APIGetAllLessons } = require('../controllers/APIController');
const initAPIRoute = (app) => {
    // router.Method('/route', handler);
    router.get('/users', APIGetAllUsers); // method GET -> READ data
    router.post('/create-user', APICreateNewUser); // method POST -> CREATE data
    router.put('/update-user', APIUpdateUser); // method PUT -> UPDATE data
    router.delete('/delete-user/:id', APIDeleteUser); // method DELETE -> DELETE data

    router.get('/topics', APIGetAllTopics); // method GET -> READ data
    router.get('/lessons', APIGetAllLessons); // method GET -> READ data

    router.delete('/delete-lesson/:id', APIDeleteLesson); // method DELETE -> DELETE data
    app.use('/api', router);
}

module.exports = initAPIRoute; // export default