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

  database.ref().on("child_added", function(snapshot){
    var firstTrainTime = snapshot.val().firstTime;
    var frequency = snapshot.val().frequency;
    var nextArrival = "";
    var minutesAway;
    var currentTime = moment();

  var firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");

  car currentTime = moment();

    console.log(firstTimeConverted);
    console.log(firstTrainTime);
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTime);
    // $("#tableBody").append('<tr><td>' + snapshot.val().name + '</td>' +
    //   '<td>' + snapshot.val().destination + '<td>' +
    //   '<td>' + snapshot.val().frequency + '<td>' +
    //   '<td>' + snapshot.val().time + '</td>')
    var newRow = `<tr>
    <td>${snapshot.val().name}</td>
    <td>${snapshot.val().destination}</td>
    <td>${snapshot.val().frequency}</td>
    <td>${nextTrain}</td>
    <td></td>

    </tr>`;
    $("#tableBody").append(newRow);
  }, function(errorObj) {
    console.log("oopsie" + errorObj.code);  
  });

$("#submit").on("click", function(){
  event.preventDefault();

  var trainName = $("#trainNameId").val().trim();
  var trainDestination = $("#destinationId").val().trim();
  var firstTrainTime = $("#trainTimeId").val().trim();
  var trainFrequency = parseInt($("#frequencyId").val().trim());
  // console.log(trainName);
  // console.log(trainDestination);
  // console.log(trainFrequency);
  // console.log(trainTime);

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTime: firstTrainTime,
    frequency: trainFrequency
  };
  // console.log(newTrain);
  database.ref().push(newTrain);
  $(".form-group > input").val("");
});

//look to the codersbay exercise to look at the value & snapshot example
// console.log("hello");
