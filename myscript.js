var slider_content = document.getElementById("box");
var image =["images/b","images/c","images/a"];
 
var i = image.length;

// function_for_next_slide

function nextImage(){
    if (i<image.length ){
        i=i+1;
    }else{
        i=1;
    }
    slider_content.innerHTML ="<img src="+image[i-1]+".jpg>";
}
//function_for_the_prew_slide 

function prewImage(){
  if (i<image.length+1 && i>1){
        i=i-1;
    }else{
        i=image.length;
    }
    slider_content.innerHTML ="<img src="+image[i-1]+".jpg>";
}

//function for show/hide answers 
  function showHide(elementId) { 
      var x=document.getElementById(elementId);
      if (x.style.display == "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
// Defining a function to display error message
  function printError(elemId, hintMsg) {
   document.getElementById(elemId).innerHTML = hintMsg;
  }

   // function for form validation 

   function validateForm() {
    var name =document.myform.name.value;  
    var email =document.myform.email.value;  
    var mobile =document.myform.mobile.value; 
    var propertyType= document.myform.propertyType.value; 
    var cbox= document.forms.myform.propertyType2;
    var bedroom=document.myform.bedroom.value;
    var comment =document.myform.comment.value;
     nameErr = emailErr = mobileErr = propertyType2Err =propertyTypeErr = commentErr = true;

    //validate name
    if(name == "") {
      printError("nameErr", "Please enter your name");
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }
  // Validate email address
  if(email == "") {
    printError("emailErr", "Please enter your email address");
} else {
    // Regular expression for basic email validation
    var regex2 = /^\S+@\S+\.\S+$/;
    if(regex2.test(email) === false) {
        printError("emailErr", "Please enter a valid email address");
    } else{
        printError("emailErr", "");
        emailErr = false;
    }
}

// Validate mobile number
if(mobile == "") {
  printError("mobileErr", "Please enter your mobile number");
} else {
 // var regex = /^[0-9]\d{10}$/;
var regex3 = /^\d{10}$/;
  if(regex3.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
  } else{
      printError("mobileErr", "");
      mobileErr = false;
  }
}
  //validate the radio buttons
 
if(propertyType== "") {
    printError("propertyTypeErr", "Please select you want sell ,Buy, or Rent");
} else {
    printError("propertyTypeErr", "");
    propertyTypeErr = false;
}
//validate the checkbox buttons
if (
  cbox[0].checked == false &&
  cbox[1].checked == false &&
  cbox[2].checked == false
) {
  printError("propertyType2Err", "Please select what property type what you interest in");
  
} else {
  printError("propertyType2Err", "");
    propertyType2Err = false;
}

//validate to beedroom numbers
if(bedroom == "Select") {
  printError("bedroomErr", "Please check how many bedroom you want ");
} else {
  printError("bedroomErr", "");
 bedroomErr = false;
}
// validate the comment box
if(comment == "") {
  printError( "commentErr","Please enter your comment");
} else {
  var regex4 =/^[a-zA-Z\s]+$/;                
  if(regex4.test(comment) === false) {
    printError("commentErr","not allowed to use /^{}]&^$£]+/ in your comment please write it again");
  } else {
    printError("commentErr", "");
            commentErr = false;
 
  }
}

if((nameErr || emailErr || mobileErr || propertyTypeErr||propertyType2Err||commentErr) == true) {
  return false;
}else {
  var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "propertyType: " + propertyType + "\n" +
                          "bedroom" +bedroom + "\n"+
                           "comment " +comment + "\n";
                           alert(dataPreview);
}


var agree=confirm("do you wish to continue?? ");
if(agree == true){
  alert ("Thank you .... will be contacting you soon");
}
else{
  return false;
}

    // if (name=="" ){  
    //     alert("your name is empty");    
    //   } else if (email==""){
    //     alert("your Email is empty");
    //   }else if (mobile==""){
    //     alert("your phone number is empty");
    //   }else{
    //       alert ("All good... thank you");
    //   }
  
}