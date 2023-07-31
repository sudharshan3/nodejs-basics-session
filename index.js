//connect to mongodb
// create, read, update, delete
// express, mongoose
// course = {title,description, instructor}

//import packages
require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")

//create app
const app = express()

app.use(express.json())
//connect to DB
const mongoURI = process.env.MONGODB_URI
console.log("Connecting to MongoDB...")
mongoose.connect(mongoURI)
    .then(()=>console.log("Success:Connected to DB"))
    .catch(err=>console.log("Fail: Not connected to DB"))


// create a schema
const Course = mongoose.model('Course',{
    title: String,
    description: String,
    instructor: String
})

// POST => /api/courses + Body {title,desc,instructor} ={} // Create
app.post("/api/course",(req,res)=>{
    const {title,description,instructor}= req.body
    const course = new Course({title,description,instructor})
    course.save().then(savedCourse=>res.json(savedCourse)).catch(err=>res.status(500).json({error:'Failed to create a course'}))
})

// GET => /api/courses = {} //Read
app.get("/api/course",(req,res)=>{
    Course.find().then(courses=>res.json(courses)).catch(err=>res.status(500).json({error:'Failed to fetch courses'}))
})

// GET => /api/courses = {} //Read
app.get("/api/course/:id",(req,res)=>{
    const courseID= req.params.id
    Course.findById(courseID).then(course=>{
        //check id if not available return err
        if (!course){
            return res.status(404).json({error:'Course Not found'})
        }
        res.json(course)
        //return data
    }).catch(err=>res.status(500).json({error:'Failed to fetch particular course'}))
})

// PUT => /api/courses 
// GET => /api/courses = {} //Read
app.put("/api/course/:id",(req,res)=>{
    const courseID= req.params.id
    const {title,description,instructor}= req.body
    Course.findByIdAndUpdate(courseID,{title,description,instructor},{new:true}).then(course=>{
        //check id if not available return err
        if (!course){
            return res.status(404).json({error:'Course Not found'})
        }
        res.json(course)
        //return data
    }).catch(err=>res.status(500).json({error:'Failed to fetch particular course'}))
})


app.listen(2000, ()=>console.log("server Started..."))