const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM USER`);
    return results;
}
const getAllTopics = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM TOPIC`);
    return results;
}
const getAllLessons = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM LESSON`);
    return results;
}
const getUserById = async (userId) => {
    let [results, fields] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(`UPDATE Users SET email=?, name=?, city=? WHERE id=?`, [email, name, city, userId]);
}
const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query(`DELETE FROM Users WHERE id = ?`, [userId]);
}
const deleteLessonById = async (lessonId) => {
    let [results, fields] = await connection.query(`DELETE FROM L WHERE id = ?`, [lessonId]);
}
module.exports = { getAllUsers, getAllTopics, getAllLessons, getUserById, updateUserById, deleteUserById, deleteLessonById }