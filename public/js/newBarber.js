

$(document).ready(function() {	 
	
	// New Account Capture
	// var barberFirstName = document.getElementById("firstName-input").value;
	// var barberLastName = document.getElementById("lastName-input").value;
	// var barberAddress = document.getElementById("address-input").value;
	// var barberCity = document.getElementById("city-input").value;
	// var barberState = document.getElementById("state-input").value;
	// var barberZip = document.getElementById("zip-input").value;
	// var barberTelephone = document.getElementById("telephone-input").value;
	// var barberEmail = document.getElementById("email-input").value;
	// var barberPassword = document.getElementById("password-input").value;
	// var barberConfirmPassword = document.getElementById("confirmPassword-input").value;

	// New Account Capture
	var barberFirstName = $("#firstName-input");
	var barberLastName = $("#lastName-input");
	var barberAddress = $("#address-input");
	var barberCity = $("#city-input");
	var barberState = $("#state-input");
	var barberZip = $("#zip-input");
	var barberTelephone = $("#telephone-input");
	var barberEmail = $("#email-input");
	var barberPassword = $("#password-input");
	var barberConfirmPassword = $("#confirmPassword-input");


   	// Adding an event listener for when the form is submitted
	$(newBarberForm).on("submit", handleNewBarberSubmitForm);

	var url = window.location.search;
	var postId;
	var barberId;
	var updating = false;

	// If we have this section in our url, we pull out the post id from the url
	// In '?post_id=1', postId is 1
	if (url.indexOf("?post_id=") !== -1) {
	    postId = url.split("=")[1];
	    getPostData(postId, "post");
	}
	// Otherwise if we have an author_id in our url, preset the author select box to be our Author
	else if (url.indexOf("?author_id=") !== -1) {
	    barberId = url.split("=")[1];
	}


	// A function to handle what happens when the form is submitted to create a new customer
	function handleNewBarberSubmitForm(event) {
	    event.preventDefault();
	    // Don't do anything if the fields hasn't been filled out
	    if (!barberFirstName.val().trim() || !barberLastName.val().trim() || !barberAddress.val().trim() || !barberCity.val().trim() || !barberState.val().trim() || !barberZip.val().trim() || !barberTelephone.val().trim() || !barberEmail.val().trim() || !barberPassword.val().trim() || !barberConfirmPassword.val().trim()) {
	      return;
	    }


	    // Constructing a newPost object to hand to the database
	    var newBarberPost = {

	      barberFirstNameObject: barberFirstName
	        .val()
	        .trim(),
	      barberLastNameObject: barberLastName
	        .val()
	        .trim(),
	      barberAddressObject: barberAddress
	        .val()
	        .trim(),
	      barberCityObject: barberCity
	        .val()
	        .trim(),
	      barberStateObject: barberState
	        .val()
	        .trim(),
	      barberZipObject: barberZip
	        .val()
	        .trim(),
	      barberTelephoneObject: barberTelephone
	        .val()
	        .trim(),
	      barberEmailObject: barberEmail
	        .val()
	        .trim(),
	      barberPasswordObject: barberPassword
	        .val()
	        .trim(),
	      barberConfirmPasswordObject: barberConfirmPassword
	        .val()
	        .trim(),
	      barberCalendlyObject: barberCalendly
		    .val()
		    .trim(),
	      barberId: barberSelect.val()
	    };

	    // Submit Post
        submitPost(newBarberPost);
	};

	// Submits a new post and brings user to customer page upon completion
	function submitPost(post) {
	    $.post("/api/posts", post, function() {
	      window.location.href = "/customer";
	    });
	}



});