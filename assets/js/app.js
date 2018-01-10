  var config = {
    apiKey: "AIzaSyC0Lu6difPFT2LR5Rt2ECM6BK706KZMWjw",
    authDomain: "trainfirebase-b86d7.firebaseapp.com",
    databaseURL: "https://trainfirebase-b86d7.firebaseio.com",
    projectId: "trainfirebase-b86d7",
    storageBucket: "trainfirebase-b86d7.appspot.com",
    messagingSenderId: "119663618367"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

$("#submit").on("click", function(){
  event.preventDefault();

  var trainName = $("#trainNameId").val().trim();
  var trainDestination = $("#destinationId").val().trim();
  var trainTime = $("#trainTimeId").val().trim();
  var trainFrequency = parseInt($("#frequencyId").val().trim());
  // console.log(trainName);
  // console.log(trainDestination);
  // console.log(trainFrequency);
  // console.log(trainTime);

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
  };
  // console.log(newTrain);
  database.ref().push(newTrain);
  $(".form-group" > input).val("");
});
// console.log("hello");
