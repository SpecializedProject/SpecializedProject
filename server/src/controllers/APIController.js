const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById, getAllTopics, getAllLessons, deleteLessonById } = require('../services/CRUDService');

const APIGetAllUsers = async (req, res) => {
    // http
    // 404 501
    // json/xml => object
    let results = await getAllUsers();
    return res.status(200).json({
        message: 'OK',
        data: results
    })
}
const APICreateNewUser = async (req, res) => {
    let { email, name, city } = req.body;
    if (!email || !name || !city) {
        return res.status(200).json({
            message: 'Missing required params'
        })
    }
    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]);
    return res.status(200).json({
        message: 'OK'
    })
}
const APIUpdateUser = async (req, res) => {
    let { email, name, city, id } = req.body;
    if (!email || !name || !city || !id) {
        return res.status(200).json({
            message: 'Missing required params'
        })
    }
    await updateUserById(email, name, city, id);
    return res.status(200).json({
        message: 'OK'
    })
}
const APIDeleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'Missing required params'
        })
    }
    await deleteUserById(userId);
    return res.status(200).json({
        message: 'OK'
    })
}
const APIGetAllTopics = async (req, res) => {
    let results = await getAllTopics();
    return res.status(200).json({
        message: 'OK',
        data: results
    })
}
const APIGetAllLessons = async (req, res) => {
    let results = await getAllLessons();
    return res.status(200).json({
        message: 'OK',
        data: results
    })
}
const APIDeleteLesson = async (req, res) => {
    let lessonId = req.params.id;
    if (!lessonId) {
        return res.status(200).json({
            message: 'Missing required params'
        })
    }
    await deleteLessonById(lessonId);
    return res.status(200).json({
        message: 'OK'
    })
}

module.exports = { APIGetAllUsers, APICreateNewUser, APIUpdateUser, APIDeleteUser, APIGetAllTopics, APIGetAllLessons, APIDeleteLesson }