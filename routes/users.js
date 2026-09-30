const express = require('express');
const {users} = require('../data/users.json')

const router = express.Router();

router.use(express.json());

// Display all the users for the url /users
router.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        data: users
    });
})

// Display a specific user using it's ID
router.get('/:id', (req, res)=>{

    const {id} = req.params;
    const user = users.find((e)=>e.id === id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: `User ${id} is not found.`
        })
    }

    res.status(200).json({
        success: true,
        data: user
    })
})

// POST method to create a new user
router.post('/', (req, res)=>{
    const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;
    if(!id || !name || !surname || !email || !subscriptionType || !subscriptionDate){
        return res.status(400).json({
            success: false,
            message: 'Provide all the required details.'
        })
    }

    const user = users.find((each)=>each.id===id);
    if(user){
        return res.status(409).json({
            success: false,
            message: `User ${id} Already Exists!`
        })
    }

    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate
    })

    res.status(201).json({
        success: true,
        message: 'User Created Successfully'
    })
})


// PUT method to update a user using it's ID
router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;

    const user = users.find((each)=>each.id === id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: `User ${id} not found!`
        })
    }

    const updateUser = users.map((each)=>{
        if(each.id === id){
            return{
                ...each,
                ...data
            }
        }

        return each
    })

    res.status(200).json({
        success: true,
        data: updateUser,
        message: "User updated successfully!"
    })
})

// DELETE method to delete user using it's ID
router.delete('/:id', (req, res)=>{

    const {id} = req.params;

    const user = users.find((each)=>each.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: `User ${id} not found!`
        })
    }

    const updatedUsers = users.filter((each)=>each.id !== id);

    // 2nd method to delete the user
    // const index = users.indexOf(user);
    // users.splice(index, 1);

    res.status(200).json({
        success: true,
        data: updatedUsers,
        message: `User ${id} deleted successfully!`
    })
})

module.exports = router;