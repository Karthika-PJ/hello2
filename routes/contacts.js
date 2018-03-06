var express = require('express');
var router = express.Router();
var cors = require('cors');
var mongoose = require('mongoose');
router.post('/contactlist',function(req,res){
     console.log(req.body);
     db.contactlist.insert(req.body,function(err,docs){
          res.json(docs);
     });
});
router.delete('/contactlist/:id',function(req,res){
     var id=req.params.id;
     console.log(id);
     db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,docs){
               res.json(docs)
     });
});
router.get('/contactlist/:id',function(req,res){
     var id=req.params.id;
     console.log(id);
     db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
          res.json(docs);
     });
});
router.put('/contactlist/:id',function(req,res){
     var id=req.params.id;
     console.log(req.body.name);
     db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
          update:{$set:{name:req.body.name,email:req.body.email,phone:req.body.phone}},
          new:true},function(err,doc){
               res.json(doc);
          });

});
module.exports = router;