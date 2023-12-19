require('dotenv').config();
const express = require('express'); // commonjs
const configViewEngine = require('./config/viewEngine');
const initWebRoute = require('./routes/web');
const initAPIRoute = require('./routes/api');
const connection = require('./config/database');


const app = express() // app express
const port = process.env.PORT || 8888 // port
const hostname = process.env.HOST_NAME


// config req.body
app.use(express.json()) // for json)
app.use(express.urlencoded({ extended: true })) // for form data

// config template engine
configViewEngine(app);

// khai báo route
//app.use('/', webRoutes);
initWebRoute(app);

// khai báo API route
initAPIRoute(app);

// test connection

// simple query
// connection.query(
//     'SELECT * FROM Users u',
//     function (err, results, fields) {
//         console.log("Results là : ", results); // results contains rows returned by server
//         console.log("Fields là : ", fields); // fields contais extra meta data about results, if available
//     }
// )


app.listen(port, hostname, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})