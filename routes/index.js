var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //render the main menu
    res.render('mainMenu');
});

router.get('/ctest', function(req, res) {
    //render the game
    res.render('game', {
        isHosting: false,
        isPublicGame: true
    });
});

router.get('/cartMaster', function(req, res) {
    //render the game
    res.render('game', {
        isHosting: true,
        isPublicGame: false
    });
});

router.get('/game2', function(req, res) {
    //render the game
    res.render('babylon');
});
module.exports = router;