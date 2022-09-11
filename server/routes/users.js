var express = require('express');
var router = express.Router();

const users = require('../controllers/users');

router.get('/', users.getAll);
router.post('/', users.add);
router.delete('/', users.delete);

module.exports = router;