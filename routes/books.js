const express = require('express');
const {books} = require('../data/books.json')

const router = express.Router();

router.use(express.json());


// GET method to get all the books 
router.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        data: books
    })
})

// GET method to get a book by it's id
router.get('/:id', (req, res)=>{

    const {id} = req.params;
    const book = books.find((each)=>each.id === Number(id));

    if(!book){
        return res.status(404).json({
            success: false,
            message: `Book ${id} not found!`
        })
    }

    res.status(200).json({
        success: true,
        data: book
    })
})

// POST method to add book

module.exports = router;