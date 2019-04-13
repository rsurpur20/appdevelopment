$(document).ready(function(){ //the end parenthesis and brackets are at the end of this document
// /////////////////////////////////////////
// THIS IS THE START OF THE JQUERY STUFF
// /////////////////////////////////////////


// variables
var list=[];
var nums_typed=[];
display_num=Number($("#answers").text());
operations=[];
checking=[];//this checking list is to make sure that the first digit of the number isnt zero
everything_typed=[];

// this function is to put everything that's been typed into a list
$(".button").click(function() {
  everything_typed.push(this.id);
});

// this function keeps track of what numbers were clicked and adds this value to the list,
$(".numbers").click(function() {
    list.push(this.id);
    $("h1").html(list);
});


// this is what happens when you hit the equal button
$("#equal").click(function(){
checking=[];
  display_num=Number($("#answers").text());
  nums_typed.push(display_num);
  num2=nums_typed.pop();
  num1=nums_typed.pop();

// this is dependent on the most recent operator that was pressed

// division
  if (operation_id=="divide"){
    product=num1/num2;
    // checks if a number is divided by zero, and checks for Infinity or NaN
    if (isFinite(product)){
      $("h1").html(product);
      }
    else{
      $("h1").html("Error");
    }
  }

// multiplication
  if (operation_id=="multiply"){
    product=num1*num2;
    $("h1").html(product);
  }

// addition
  if (operation_id=="add"){
    product=num1+num2;
    $("h1").html(product);
  }

  // subtraction
  if (operation_id=="subtract"){
    product=num1-num2;
    $("h1").html(product);
  }
  list=[]; //empties the list of numbers typed in
});

$(".operator").click(function(){
  operation_id=this.id; //keeps track of which operator to use
  checking=[];
  display_num=Number($("#answers").text());
  checking_var=nums_typed.includes(display_num);
  // checking if the number that is displayed in the list of numbers to do operations on
  if (checking_var==false){
    nums_typed.push(display_num);
    list=[];
  }
});



// clear function
$("#AC").click(function(){
  list=['0'];
  nums_typed=[];
  $("h1").html(list);
  list.length=0;
});

// switching between positive and negative signs
$("#sign_switch").click(function(){
  display_num=Number($("#answers").text())*-1;
  $("h1").html(display_num);
});

// percent button
$("#percent").click(function(){
  display_num=Number($("#answers").text())/100;
  $("h1").html(display_num);
});


// decimal function
$("#period").click(function(){
//making sure there is only one decimal point in each number
decimal_checking=list.includes(".");
if (decimal_checking==false){
  list.push(".");
  $("h1").html(list);
}
});




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
