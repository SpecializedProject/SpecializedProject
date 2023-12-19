const connection = require('../config/database');
const { getAllUsers, getAllTopics, getAllLessons, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService');

const getListUserPage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('listUser.ejs', { listUsers: results })
}
const getListTopicPage = async (req, res) => {
    let results = await getAllTopics();
    return res.render('listTopic.ejs', { listTopics: results })
}
const getListLessonPage = async (req, res) => {
    let results = await getAllLessons();
    return res.render('listLesson.ejs', { listLessons: results })
}
const getHomeConChoTai = (req, res) => {
    res.render('example.ejs')
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let { email, name, city } = req.body;
    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]);

    console.log("Results là : ", results)
    console.log("Fields là : ", fields)
    console.log(">>> req.body: ", req.body)
    console.log(">>> email: ", email)
    console.log(">>> name: ", name)
    console.log(">>> city: ", city)
    res.redirect('/');
}
const getUpdatePage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render('update.ejs', { userUpdate: user });
}
const postUpdateUser = async (req, res) => {
    let { email, name, city, userId } = req.body;
    console.log(">>> req.body: ", req.body)
    console.log(">>> email: ", email)
    console.log(">>> name: ", name)
    console.log(">>> city: ", city)
    console.log(">>> id: ", userId)
    await updateUserById(email, name, city, userId);
    res.redirect('/');
}
const postDeleteUser = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { userDelete: user });
}
const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId;
    await deleteUserById(userId);
    res.redirect('/');
}

module.exports = {
    getListUserPage, getListTopicPage, getListLessonPage, getHomeConChoTai,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandleRemoveUser
}
