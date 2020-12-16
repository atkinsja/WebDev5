$(document).ready(function() {

	
	 // code for creating array, for loop to populate array 
	var numImages = 2;
    var imageArray = new Array();

    for (var i = 0; i < numImages; i++) {
    //set image src property to image path, preloading image in the process
        imageArray[i] = new Image();
        $(imageArray[i]).attr("src", "images/brightIdea" + (i+1) + ".png");
    }
    
    var i4_image = 0;
    setInterval(function() {

     //code for blinking bulb
     $("#blinking_image").attr("src", $(imageArray[i4_image]).attr("src"));
     i4_image = (i4_image+1)%imageArray.length;

    }, 700); //end setInterval



}); //end $(document).ready




/********************************************************************/


$(document).ready(function() {
   
    // code for login click

    $("#login").click(function(){
    	var username = prompt("Please enter your name.");
        var phrase = username  + ", " + $("h2").html();
        $("h2").html(phrase);
    })

}); //end $(document).ready



/******************************************************************/

