const mongoose = require('mongoose');

const {Schema} = mongoose;

const TraineeAddresss = new Schema({
    current_address: String,
    permanent_address: String,
})

const TraineeAddress = mongoose.model('TraineeAddress',TraineeAddresss)
module.exports = TraineeAddress;