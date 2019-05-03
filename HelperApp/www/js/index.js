$(document).ready(function(){ //the end parenthesis and brackets are at the end of this document
// /////////////////////////////////////////
// THIS IS THE START OF THE JQUERY STUFF
// /////////////////////////////////////////

// var myDB = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});
// transaction.executeSql('CREATE TABLE IF NOT EXISTS Payment_Summary (id integer primary key, Type_of_Purchase,	Amount_Purchased,	Date)', [],
// function(tx, result) {
// alert("Table created successfully");
// },
// function(error) {
// alert("Error occurred while creating the table.");
// });
// });
//
// function spentFunction(){
// var spent_amount=document.getElementById('spent_input').value;
// // var purchase_type=;
// myDB.transaction(function(transaction) {
// var executeQuery = "INSERT INTO Payment_Summary (Type_of_Purchase, Amount_Purchased) VALUES ('Tuck Shop',"+spent_amount+")";
// transaction.executeSql(executeQuery, [title,desc]
// , function(tx, result) {
// alert('Inserted');
// },
// function(error){
// alert('Error occurred');
// });
// });
// }

// pie chart
// function pie_chart(){




// /////////////////////////////////////////
// THIS IS THE END OF THE JQUERY STUFF
// /////////////////////////////////////////



// /////////////////////////////////////////
// THIS IS THE START OF THE CORDOVA STUFF
// /////////////////////////////////////////
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

// /////////////////////////////////////////
 // THIS IS THE END OF THE CORDOVA STUFF
 // /////////////////////////////////////////

 });//end jQuery
