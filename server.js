const express = require('express')
const app = express()
const port = 3000
const db = require('./db')
const Form = require('./models/form')
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/', (req, res) =>{ 
    res.send('Hello World!')
})

//post route to add a form
app.post('/form', async(req,res)=>{
    try {
        
     const data = req.body
     const newForm = new Form(data);

     const response = await newForm.save();
     console.log('data saved');
     res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json(error, 'Internal server error')
    }
})


//get method to get data
app.get('/form', async(req,res)=>{
    try {
        const data = await Form.find();
        console.log('data read');
       res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error, 'Internal server error')
    }
})


app.listen(port, () => console.log(`Server app listening on port ${port}!`))