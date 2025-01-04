var mdb = require('mongoose')
var feedbackschema = mdb.Schema({
    name:String,
    email:String,
    des:String
})

var feedback_schema = mdb.model("feedbacks",feedbackschema);
module.exports = feedback_schema;