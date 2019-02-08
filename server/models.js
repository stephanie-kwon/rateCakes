var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ratecakes');
    var cakeSchema = new mongoose.Schema({
        name: {type: String},
        image: {type: String},
        rating: [{stars: Number, default: '', comment: String, default: ''}],
        // comment: [{type: String, default: ''}]
    }, {timestamps:true});


    mongoose.model('Cake', cakeSchema);
    var Cake = mongoose.model('Cake');

module.exports = Cake