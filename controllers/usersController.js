// para que js reconozca res como http, de otra forma no sabe de que tipo seria.
const {response} = require('express');


const getUsers = (req, res = response) => {

    // GET usa QUERY
    const {nombre, edad, pareja} = req.query;

    res.json({
        msg: 'get API desde controlador',
        nombre,
        edad,
        pareja
    });
;}

// POST
const postUsers = (req, res = response) => {

    // POST usa BODY
    const { nombre, edad} = req.body;

    res.json({
        msg: 'post API desde controlador',
        nombre,
        edad
    });
};

// PUT
const putUsers = (req, res = response) => {

    // PUT usa PARAMS
    const id = req.params.id;

    res.json({
        msg: 'put API desde controlador',
        id
    });
};

const patchUsers = (req, res = response) => {
    res.json({
        msg: 'patch API desde controlador'
    });
};

// DELETE
const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'delete API desde controlador'
    });
};


module.exports = {
    getUsers,
    deleteUsers,
    patchUsers,
    putUsers,
    postUsers
};