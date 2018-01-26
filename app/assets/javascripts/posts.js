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