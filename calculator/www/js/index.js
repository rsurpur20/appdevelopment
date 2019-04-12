// things that i need to check:
// make sure that the first digit of any number isn't 0
// make sure that if the user puts in a multiplication sign and then a divison, then it should divide
// the user can only put in one decimal point
//

$(document).ready(function(){ //the end parenthesis and brackets are at the end of this document
// /////////////////////////////////////////
// THIS IS THE START OF THE JQUERY STUFF
// /////////////////////////////////////////

var list=[];
var nums_typed=[];
display_num=Number($("#answers").text());
operations=[];
checking=[];//this checking list is to make sure that the first digit of the number isnt zero
//with mutliplication and division, that goes first before the addition or subtraction--Pemdas

// this function keeps track of what was clicked and adds this value to the list
$(".numbers").click(function() {
  //make sure that the first digit of this number is non zero
  checking.push(this.id);
  if (Math.sign(checking[0])==1 || Math.sign(checking[0])==-1){
    list.push(this.id);
    $("h1").html(list);
    }
    else{
checking=[];
    }
});

$("#equal").click(function(){
checking=[];
  console.log(operations);
  display_num=Number($("#answers").text());
  nums_typed.push(display_num);
  console.log(nums_typed);
  num2=nums_typed.pop();
  num1=nums_typed.pop();
  if (operations.slice(-1)[0]=="divide"){
    console.log("DIVISIIIIION");
    console.log($("#answers").text());
    product=num1/num2;
    // checks if a number is divided by zero, and checks for Infinity or NaN
    if (isFinite(product)){
      $("h1").html(product);
      }
    else{
      console.log("should print out errors");
      $("h1").html("Error");
    }
  }
  if (operations.slice(-1)[0]=="multiply"){
    console.log("multipliaCCCation");
    product=num1*num2;
    $("h1").html(product);

  }
  if (operations.includes("add")){
    console.log("ASDDDDD");
    product=num1+num2;
    $("h1").html(product);
  }
  if (operations.includes("subtract")){
    console.log("SUBTTRRACT");
    product=num1-num2;
    $("h1").html(product);
  }


  list=[];
  // operations=[];
});

$(".operator").click(function(){
  checking=[];
  // operations=[];
  console.log(operations);
  display_num=Number($("#answers").text());
  if (nums_typed.includes(display_num)){
    // console.log("includes")
  }
  else{
    nums_typed.push(display_num);
    console.log(nums_typed);
    list=[];
    operations.push(this.id);
  }
  // console.log(operations);
});




$("#AC").click(function(){
  list=['0'];
  nums_typed=[];
  $("h1").html(list);
  list.length=0;
});

$("#sign_switch").click(function(){
  display_num=Number($("#answers").text())*-1;
  console.log("skrrt"+display_num);
  $("h1").html(display_num);
});

$("#percent").click(function(){
  display_num=Number($("#answers").text())/100;
  console.log("skrrt"+display_num);
  $("h1").html(display_num);
});
$("#period").click(function(){

if (list.includes(".")){
}
else{
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
