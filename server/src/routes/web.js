const express = require('express');
const router = express.Router();
const { getListUserPage, getListTopicPage, getListLessonPage, getCreatePage, postCreateUser,
    getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController');

const initWebRoute = (app) => {
    // router.Method('/route', handler);
    router.get('/', getListUserPage);
    router.get('/topic', getListTopicPage);
    router.get('/lesson', getListLessonPage);
    router.get('/create', getCreatePage);
    router.get('/update/:id', getUpdatePage);

    router.post('/create-user', postCreateUser);
    router.post('/update-user', postUpdateUser);
    router.post('/delete-user/:id', postDeleteUser);
    router.post('/delete-user', postHandleRemoveUser);
    app.use('/', router);
}

module.exports = initWebRoute; // export default