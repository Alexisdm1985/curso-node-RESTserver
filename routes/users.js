const { Router } = require('express');

const { 
    getUsers,
    postUsers, 
    putUsers, 
    patchUsers, 
    deleteUsers 
} = require('../controllers/usersController');

// Esto reemplaza al const app = expres(); => app.get ...
const router = Router();

router.get('/', getUsers);
router.post('/', postUsers);
router.put('/:id', putUsers);
router.patch('/', patchUsers);
router.delete('/', deleteUsers);

module.exports = router;