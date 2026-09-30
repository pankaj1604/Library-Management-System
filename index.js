const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const userRouter = require('./routes/users')
const bookRouter = require('./routes/books')

app.use('/users', userRouter);
app.use('/books', bookRouter);

// Root url
app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Hello Express!'
    })
})



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})