/ 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyDdPzvFCDhjbEvJyDlNv0CYok-qUtJc_YI",
  authDomain: "time-sheet-55009.firebaseapp.com",
  databaseURL: "https://time-sheet-55009.firebaseio.com",
  storageBucket: "time-sheet-55009.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();
