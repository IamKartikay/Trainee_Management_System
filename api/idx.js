const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5001;
const app = express();
const TrainingDetail = require("./Models/TrainingDetails");
const BasicDetail = require("./Models/BasicDetails");
const TraineeAddress = require("./Models/TrainginAddress");
const Trainee = require(".//Models/Trainee");

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

app.get("/details", async (req, res) => {

  const {
    mentor_name,
    training_field,
    training_start,
    training_end,
    training_period,
    training_status,

    firstName,
    lastName,
    contactNo,
    address,

    tenthSchool,
    tenthMarks,
    twelthMarks,
    twelthSchool,
  } = req.body;

  const trainingDetails = new TrainingDetail({
    mentor_name: "Niranjan",
    training_field: "Web Development",
    training_period: "1",
    training_status: "Ongoing",
  });

  const basicDetails = new BasicDetail({
    first_name: "Kartikay",
    last_name: "Singh",
    contact_no: 9810468038,
  });

  const addressDetails = new TraineeAddress({
    current_address: "123 Main Street",
    permanent_address: "123 Main Street",
  });

  console.log("in");

  Promise.all([
    basicDetails.save(),
    addressDetails.save(),
    trainingDetails.save(),
  ])
    .then(([savedBasicDetails, savedAddressDetails, savedTrainingDetails]) => {
      // Create the trainee and link with the saved details using their IDs
      const trainee = new Trainee({
        basicDetails: savedBasicDetails._id,
        addressDetails: savedAddressDetails._id,
        trainingDetails: savedTrainingDetails._id,
        // Other trainee fields
      });

      // Save the trainee to the database
      return trainee.save();
    })
    .then((savedTrainee) => {
      console.log("Trainee and related details created:");
      console.log(savedTrainee);
      // The 'savedTrainee' will contain the saved trainee document with IDs of related details
    })
    .catch((error) => {
      console.error("Error creating trainee and related details:", error);
    });
});

app.get("/show", async (req, res) => {
  const traineeId = "64cd3ec610425db73bf92334"; // Replace this with the actual ID of the trainee

  await Trainee.findById(traineeId)
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
        // Now trainee.basicDetails, trainee.addressDetails, and trainee.trainingDetails will contain the actual documents from the respective collections
      }
    })
    .catch((error) => {
      console.error("Error fetching trainee details:", error);
    });
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
