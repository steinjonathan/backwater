import firebase = require("firebase");

export function connectFirebase() : firebase.database.Database {
    var config = {
        apiKey: "AIzaSyBKCMaUFGk6D5onzb-UjH74GRpJETS4wHc",
        authDomain: "backwater-db.firebaseapp.com",
        databaseURL: "https://backwater-db.firebaseio.com",
        projectId: "backwater-db",
        storageBucket: "",
        messagingSenderId: "712987019158"
      };
    
    firebase.initializeApp(config);
    
    // Get a reference to the database service
    var database = firebase.database();
    return database;
}