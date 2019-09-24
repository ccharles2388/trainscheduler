//1. Initialize Firebase
var config = {
  apiKey: "AIzaSyDxPZb4HtuB71w2elqnYerNFHOCVUEYkb0",
  authDomain: "myfirebaseproject-66a8e.firebaseapp.com",
  databaseURL: "https://myfirebaseproject-66a8e.firebaseio.com",
  projectId: "myfirebaseproject-66a8e",
  // Missing Storage Bucket Information - Researching 
  storageBucket: "",
  messagingSenderId: "891611664308",
  appId: "1:891611664308:web:5cdf0c9e115c35a9a02ce1"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees
$("#add-train-btn").on("click", function (event) {
  event.preventDefault();
  console.log("ok");
  // Grabs user train input
  var trainName = $("#train-name-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var firstTime = moment($("#first-time-input").val().trim(), "MM/DD/YYYY").format("X");
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: newTrain,
    dest: trainDest,
    time: firstTime,
    freq: frequency
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.time);
  console.log(newTrain.freq);

  alert("New Train Schdedule Successfully Added");

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#dest-input").val("");
  $("#time-input").val("");
  $("#freq-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var newTrain = childSnapshot.val().name;
  var trainDest = childSnapshot.val().dest;
  var firstTime = childSnapshot.val().time;
  var frequency = childSnapshot.val().freq;

  // Console Log Train Info
  console.log(newTrain);
  console.log(trainDest);
  console.log(firstTime);
  console.log(frequency);

  // Prettify the Train Time For Mins time
  var firstTimePretty = moment.unix(firstTime).format("HHMM");

  // Calculate the remaining time



  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(newTrain),
    $("<td>").text(trainDest),
    $("<td>").text(firstTimePretty),
    $("<td>").text(empMonths),
    $("<td>").text(frequency),
    $("<td>").text(empBilled)
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});

// Train Schedule Time Notes And Math Work
// -----------------------------------------------------------------------------
// FirstTimePretty Needs To Be Formated

