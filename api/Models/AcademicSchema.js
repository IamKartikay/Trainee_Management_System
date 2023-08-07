const mongoose = require('mongoose');

const {Schema} = mongoose;

const AcademicDetailSchema = new Schema({
    tenth_School: String,
    tenth_grades: Number,
    twelth_School: String,
    twelth_grades: Number,
}); 

const AcademicDetail = mongoose.model('AcademicDetail',AcademicDetailSchema)
module.exports = AcademicDetail;
