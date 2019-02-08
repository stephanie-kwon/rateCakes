var cakes = require('./models')

module.exports = {
    home: function(req, res){
        cakes.find({}, function(err, cakes){
            if(err){
                console.log("wrong in home");
            } else {
                console.log("corect in home");
                res.json(cakes)
            }
        })
    },
    create: function(req,res) {
        cakes.create(req.body, function(err, cake){
            if(err){
                console.log("wrong in create");
            } else {
                console.log("correct in create");
                res.json(cake)
            }
        })
    },
    update: function(req,res) {
        cakes.update({_id: req.params.id}, {$push: {rating: req.body}}, function(err, cake){
            if(err) {
                console.log("wrong in update"); 
            } else {
                console.log("correct in update");
                res.json({cake})
            }
        })
    },
    oneCake: function(req,res) {
        cakes.findById(req.params.id)
        .then((data)=> {
            console.log("one cake");
            res.json(data);
        })
        .catch((err)=> {
            console.log("err in onecake")
            res.json(err);
        })
    }

}

