require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const mongoPass = process.env.PASSWORD
const adminPass = process.env.ADMIN_PASS // REMEMBER TO CHANGE THIS BEFORE DEPLOYMENT
const mongoose = require('mongoose')
const PrivateUser = require('./models/privateuser')
const Project = require('./models/project')
const Blog = require('./models/blog')
// DB Connection address
const uri = `mongodb+srv://mattisimpson:${mongoPass}@to00bs65-3003.gj3nvll.mongodb.net/?retryWrites=true&w=majority`;

// Make DB connection
mongoose.connect(uri);

const db = mongoose.connection;

// Connection status

db.on("error", (err) => console.log(`Connection ${err}`));

db.once("open", () => console.log("Connected to DB!"));

app.use(express.json());
app.use(cors());
// Create user, blog, and project schemas

// test models
const newPrivateUser = new PrivateUser({
    firstName: "Matt",
    lastName: "Simpson",
    email: "matt.rc.simpson@gmail.com",
    password: "Not telling",
    isAdmin: true
})

const newProject = new Project({
    projectName: "Test project",
    projectDescription: "Description",
    gitHubUrl: "gh URL",
    deploymentUrl: "Dep URL",
    madeWith: "node",
    completionDate: new Date(),
})
const newBlog = new Blog({
    title: "Blog title",
    body: "Blog content",
    date: new Date().toLocaleDateString("en-GB")
})

// Console log the tests
// console.log("Test models: ", newPrivateUser, newProject, newBlog)

// Create routes

// TEST ROUTES 
// User route
app.get('/users', async (req, res) => {
    res.status(200).json(newPrivateUser);
})
// Project routes
app.get('/projects', async (req, res) => {
    res.status(200).json(newProject);
})
// Blog routes
app.get('/blogs', async (req, res) => {
    res.status(200).json(newBlog);
})

// Express server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})