const router = require('express').Router()
const NBA = require("nba");
const curry = NBA.findPlayer('Lebron James');


router.route('/stats').get((req,data)=>{
    console.log(curry)
    NBA.stats.playerInfo({PlayerID: curry.playerId }).then(stats =>{
        data.json(stats["playerHeadlineStats"][0])
    });  
});

router.route('/stats/:first/:last').get((req,data)=>{
    console.log(req.params.first)
    NBA.stats.playerInfo({PlayerID: NBA.findPlayer(`${req.params.first} ${req.params.last}`).playerId }).then(stats =>{
        data.json(stats["playerHeadlineStats"][0])
    });  
});


module.exports = router;