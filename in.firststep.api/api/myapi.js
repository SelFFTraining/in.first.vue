const express = require('express');

const path = require('path');
const PUBLIC_PATH = path.join(__dirname, '../public/dist');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use(express.static(PUBLIC_PATH))

let taskList = {tasks: []};

app.get('/api/task', (req, res) =>{
    res.send(taskList);
});
app.get('/sw.js', (req, res) =>{
    res.sendFile(path.join(__dirname, '../sw.js'))
});
app.post('/api/task', (req, res) =>{
    taskList.tasks.push(req.body);
    res.status(201).send(req.body);
});
app.del('/api/task', (req, res)=>{
    console.log(req.body);
    if(!req.body.title) {
        res.status(422).send('require title query string')
    }
    taskList.tasks = taskList.tasks.filter(data=>{
        return data.data.title !== req.body.title
    });
    res.send(taskList);
})

app.listen(PORT, ()=>{
    console.log('started listening at ' +PORT);
});



