// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let Player = mongoose.model('Player'); // change as needed

module.exports = {
    getAllPlayers : (request, response) => {
        Player.find({}, (error, players) => {
            if (error) {
                console.log(error);
            } else {
                console.log('success responding with players')
                response.json(players);
            }
        });
    },
    addAPlayer : (request, response) => {
        console.log('hiiiii');
        let player = new Player(request.body);
        player.save((error, player) => {
            if (error) {
                console.log(error);
                response.json(error);
            } else {
                console.log('success responding with add player')
                response.json(player);
            }
        });
    },

    removeAPlayer : (request, response) => {
        console.log('request body from remove');
        console.log(request.body);
        Player.remove({_id: request.body.id}, (error)=>{
            console.log('sup');
            console.log(error);
            response.json(true);
        });

    },

    updateGame1Status : (request, response) => {
        console.log('request body is:');
        console.log(request.body);
        Player.update({_id: request.body.playerId}, {game1Status: request.body.status}, (error)=>{
            console.log('sup');
            console.log(error);
            response.json(true);
        });

    },
    updateGame2Status : (request, response) => {
        console.log('request body is:');
        console.log(request.body);
        Player.update({_id: request.body.playerId}, {game2Status: request.body.status}, (error)=>{
            console.log('sup');
            console.log(error);
            response.json(true);
        });

    },
    updateGame3Status : (request, response) => {
        console.log('request body is:');
        console.log(request.body);
        Player.update({_id: request.body.playerId}, {game3Status: request.body.status}, (error)=>{
            console.log('sup');
            console.log(error);
            response.json(true);
        });

    },

}
