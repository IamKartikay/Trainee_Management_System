const mongoose = require('mongoose');

const {Schema} = mongoose;

const TraineeBasicDetails = new Schema({
    first_name: String,
    last_name: String,
    contact_no: Number,
}); 

const BasicDetail = mongoose.model('TraineeBasicDetails',TraineeBasicDetails)
module.exports = BasicDetail;
