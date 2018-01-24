// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

function addCommentField() {
	//create Date object 
    var date = new Date();

    //get number of milliseconds since midnight Jan 1, 1970  
    //and use it for address key 
    var mSec = date.getTime();

    //Replace 0 with milliseconds 
    idAttributComments = "post_comments_attributes_0_text".replace("0", mSec);
    nameAttributComments = "post[comments_attributes][0][text]".replace("0", mSec);

    var li = document.createElement("li");

    //create input for Kind, set it's type, id and name attribute, 
    //and append it to <li> element  
    var inputText = document.createElement("INPUT");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", idAttributComments);
    inputText.setAttribute("name", nameAttributComments);
    li.appendChild(inputText);

        //add created <li> element with its child elements 
    //(label and input) to myList (<ul>) element
    document.getElementById("myList").appendChild(li);

    //show address header
    document.getElementById("commentsHeader").style.display = "";

}

