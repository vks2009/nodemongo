var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    console.log(req.db);
    var db = req.db;
    var collection = db.get('products');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
