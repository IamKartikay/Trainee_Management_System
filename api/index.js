const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5001;
const app = express();
const Trainee = require(".//Models/Trainee");
const TrainingDetail = require("./Models/TrainingDetails");
const BasicDetail = require("./Models/BasicDetails");
const TraineeAddress = require("./Models/TrainginAddress");
const AcademicDetail = require("./Models/AcademicSchema");

app.use(cors());
app.use(express.json());

//connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://sys_admin:O0PQUJXFq2BaTaav@cluster0.tmchiei.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("connected");
}

app.get("/", async (req, res) => {
  res.send("heeloo");
  console.log(req.url);
});

app.post("/details", async (req, res) => {
  const { basicDetails, academicDetails, trainingDetails } = req.body;

  const basicRecord = await BasicDetail.create({
    first_name: basicDetails.first_name,
    last_name: basicDetails.last_name,
    contact_no: basicDetails.contact_no,
  });

  const academicRecord = await AcademicDetail.create({
    tenth_School: academicDetails.tenth_School,
    tenth_grades: academicDetails.tenth_grades,
    twelth_School: academicDetails.twelth_School,
    twelth_grades: academicDetails.twelth_grades,
  });

  const trainingRecord = await TrainingDetail.create({
    mentor_name: trainingDetails.mentor_name,
    training_field: trainingDetails.training_field,
    training_start: trainingDetails.training_start,
    training_end: trainingDetails.training_end,
    training_status: trainingDetails.training_status,
  });

  const trainee = await Trainee.create({
    basicDetails: basicRecord._id,
    academicDetails: academicRecord._id,
    trainingDetails: trainingRecord._id,
  });

  await Trainee.findById(trainee._id)
    .populate("basicDetails")
    .populate("academicDetails")
    .populate("trainingDetails")
    .exec()
    .then((trainee) => {
      if (!trainee) {
        console.log("Trainee not found.");
      } else {
        console.log("Trainee details with related data:");
        console.log(trainee);
      }
    });
  res.send(trainee);
  res.end("ok");
});

app.get("/show", async (req, res) => {
  try {
    const allTrainees = await Trainee.find()
      .populate("basicDetails")
      .populate("academicDetails")
      .populate("trainingDetails")
      .exec();

    res.json(allTrainees);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
