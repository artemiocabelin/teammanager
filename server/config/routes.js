let mongoose = require('mongoose');
const path = require("path");
let Player = mongoose.model('Player'); // alter as needed
let players = require('../controllers/players.js') // alter

module.exports = function(app) {
    // route handlers goes here
    app.get('/api/players', players.getAllPlayers);
    app.post('/api/players/create', players.addAPlayer);
    app.post('/api/players/remove', players.removeAPlayer);
    app.post('/api/players/remove', players.removeAPlayer);
    app.post('/api/players/game/1/update', players.updateGame1Status);
    app.post('/api/players/game/2/update', players.updateGame2Status);
    app.post('/api/players/game/3/update', players.updateGame3Status);
    // ------------------------
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}