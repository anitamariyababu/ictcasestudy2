const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name:String,
    dob:Number,
    genre:String,
    image:String
});
var Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;