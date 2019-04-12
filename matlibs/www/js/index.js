/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).ready(function(){ //the end parenthesis and brackets are at the end of this document

// /////////////////////////////////////////
// THIS IS THE START OF THE JQUERY STUFF
// /////////////////////////////////////////

  $('button').click(function(){
    var first= $("#1").val();
    var second= $("#2").val();
    var third= $("#3").val();
    var fourth= $("#4").val();
    var fifth= $("#5").val();
    var sixth= $("#6").val();
    var seventh= $("#7").val();
    var eighth= $("#8").val();
    var nineth= $("#9").val();
    var tenth= $("#10").val();
    var eleventh= $("#11").val();
    var twelveth= $("#12").val();
    var thirteen= $("#13").val();

    $(".result").html(

      "<p><br> NARRATOR: <br> Once upon a time, there was a sad little princess named Rapunzel.  Rapunzel had a couple of problems.  First she was locked in a "+first+" made of "+second+". She also had the world's longest "+third+". Rapunzel's "+third+" had magical powers though and an evil witch forced her to stay in the... "+first+" to keep the magic all to herself.  Once a week, she would visit Rapunzel and call out to her: <br> WITCH: <br> Rapunzel, Rapunzel, let down your golden "+third+".<br>NARRATOR:<br> Rapunzel did because she really needed the food the witch brought her to survive.  She especially enjoyed the "+fourth+" the witch made for her. <br>WITCH:<br> Why are you sad, Rapunzel?  I give you a home and your favorite food "+fourth+".<br>RAPUNZEL:<br>I am sad because I never get to see a "+fifth+" or a "+sixth+" or even go to "+seventh+". <br>WITCH:<br> You can not leave until I discover the secret of your magic "+third+".<br> RAPUNZEL:<br> "+eighth+"! How long is that going to take?<br>WITCH: <br>I'm guessing about... "+nineth+" years.<br>RAPUNZEL:<br> That's a long time.  I want to leave now!<br>WITCH:<br> Well, there were some wise words my grandmother once told me "+tenth+".<br>RAPUNZEL:<br>What does that have to do with anything?<br>WITCH:<br>When the time is right, you'll understand.<br>NARRATOR:<br>And with that the witch slid down the golden "+third+" and disappeared into the woods.  Rapunzel was upset and cried so loudly that a handsome young "+eleventh+" heard her.  He quickly climbed on his "+twelveth+" and rode in to the woods.  He followed the sound of the crying. And he found a tall "+first+".<br>"+eleventh+":<br>Is someone there?<br>RAPUNZEL:<br>Yes.<br>"+eleventh+":<br>Why are you crying?<br>RAPUNZEL:<br>I'm trapped in this tower.  The witch won't let me go.<br>"+eleventh+":<br>How does the witch get in and out?<br>RAPUNZEL:<br>She climbs my "+third+".<br>NARRATOR:<br>And Rapunzel showed him her golden "+third+"<br>"+eleventh+":<br>That is the most beautiful "+third+" I have even seen.<br>RAPUNZEL:<br>Really?<br>NARRATOR:<br>And Rapunzel leaned out the window so give him a good look at her "+third+" but she lost her balance and fell out of the window.  The "+eleventh+" sprung in to action and quickly made a net out of his "+thirteen+" and tied one end to his "+twelveth+" and held on to the other end just in time to catch Rapunzel. He was so captivated by her wonderful "+third+" that he dropped to one knee and proposed on the spot.  They were married, had "+nineth+" children and lived happily ever after.</p>");
    // $(".result").text(first+"or"+first+"notl there is no"+second+".")
    $("form").hide(2000)
  // .html instead of text  and add <p></p>
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


}); //end jQuery
