

$(document).ready(function() {	 


	// New Account Captures information from form


	var customerFirstName = document.getElementById("firstName-input").value;
	var customerLastName = document.getElementById("lastName-input").value;
	var customerTelephone = document.getElementById("telephone-input").value;
	var customerEmail = document.getElementById("email-input").value;
	var customerPassword = document.getElementById("password-input").value;
	var customerConfirmPassword = document.getElementById("confirmPassword-input").value;

	// Adding event listeners to the form 
	// $(document).on("submit", "#newCustomerForm", handleNewCustomerSubmitForm);

	// or

	// Adding an event listener for when the form is submitted
	$(newCustomerForm).on("submit", handleNewCustomerSubmitForm);


	var url = window.location.search;
	var postId;
	var customerId;
	var updating = false;

	// If we have this section in our url, we pull out the post id from the url
	// In '?post_id=1', postId is 1
	if (url.indexOf("?post_id=") !== -1) {
	    postId = url.split("=")[1];
	    getPostData(postId, "post");
	}
	// Otherwise if we have an author_id in our url, preset the author select box to be our Author
	else if (url.indexOf("?author_id=") !== -1) {
	    customerId = url.split("=")[1];
	}



	// // Getting references to the name input and author container, as well as the table body
	// var nameInput = $("#author-name");
	// var authorList = $("tbody");
	// var authorContainer = $(".author-container");



	// A function to handle what happens when the form is submitted to create a new customer
	function handleNewCustomerSubmitForm(event) {
	    event.preventDefault();
	    // Don't do anything if the fields hasn't been filled out
	    if (!customerFirstName.val().trim().trim()) {
	      return;
	    };

	    if (!customerLastName.val().trim().trim()) {
	      return;
	    };

	    if (!customerTelephone.val().trim().trim()) {
	      return;
	    };

	    if (!customerEmail.val().trim().trim()) {
	      return;
	    };

	    if (!customerPassword.val().trim().trim()) {
	      return;
	    };

	    if (!customerConfirmPassword.val().trim().trim()) {
	      return;
	    };

	    // Constructing a newPost object to hand to the database
	    var newCustomerPost = {

	      customerFirstNameObject: customerFirstName
	        .val()
	        .trim(),
	      customerLastNameObject: customerLastName
	        .val()
	        .trim(),
	      customerTelephoneObject: customerTelephone
	        .val()
	        .trim(),
	      customerEmailObject: customerEmail
	        .val()
	        .trim(),
	      customerPasswordObject: customerPassword
	        .val()
	        .trim(),
	      customerConfirmPasswordObject: customerConfirmPassword
	        .val()
	        .trim(),
	      customerId: customerSelect.val()
	    };

	    // If we're updating a post run updatePost to update a post
	    // Otherwise run submitPost to create a whole new post
	    if (updating) {
	      newCustomerPost.id = postId;
	      updatePost(newCustomerPost);
	    }
	    else {
	      submitPost(newCustomerPost);
	    }

	};

	// Submits a new post and brings user to customer page upon completion
	function submitPost(post) {
	    $.post("/api/posts", post, function() {
	      window.location.href = "/User";
	    });
	}






// -------------------------------------------------------------------------
//     // A function for creating a Customer. Calls getCustomers upon completion
// 	function upsertCustomer(customerData) {
// 	    $.post("/api/customers", customerData)
// 	      .then(getCustomers);
//     }


// // Need For Barber------------------------------
//     // Function for creating a new list row for customers
// 	function createCustomerRow(customerData) {
// 	    var newTr = $("<tr>");
// 	    newTr.data("customer", customerData);
// 	    newTr.append("<td>" + customerData.customerFirstNameObject + "</td>");
// 	    newTr.append("<td>" + customerData.customerLastNameObjectt + "</td>");
// 	    newTr.append("<td>" + customerData.customerTelephoneObjectt + "</td>");
// 	    newTr.append("<td>" + customerData.customerEmailObject + "</td>");
// 	    newTr.append("<td>" + customerData.customerPasswordObject + "</td>");
// 	    newTr.append("<td>" + customerData.customerConfirmPasswordObject + "</td>");
// 	    return newTr;
//     }

//     // Function for retrieving authors and getting them ready to be rendered to the page
//     function getCustomers() {
// 	    $.get("/api/customers", function(data) {
	      
// 	      var rowsToAdd = [];
	      
// 	      for (var i = 0; i < data.length; i++) {
// 	        rowsToAdd.push(createCustomerRow(data[i]));
// 	      }
	      
// 	      renderCustomerList(rowsToAdd);
// 	      customerFirstName.val("");
// 	      customerLastName.val("");
// 	      customerTelephone.val("");
// 	      customerEmail.val("");
// 	      customerPassword.val("");
// 	      customerConfirmPassword.val("");

// 	    });
//     }

//     // A function for rendering the list of customers to the page
//     function renderCustomerList(rows) {
// 	    customerList.children().not(":last").remove();
// 	    customerContainer.children(".alert").remove();
// 	    if (rows.length) {
// 	      console.log(rows);
// 	      customerList.prepend(rows);
// 	    }
// 	    else {
// 	      renderEmpty();
// 	    }
//     }


    // // Function for handling what to render when there are no authors
    // function renderEmpty() {
	   //  var alertDiv = $("<div>");
	   //  alertDiv.addClass("alert alert-danger");
	   //  alertDiv.text("You must create a Customer before you can create an account.");
	   //  customerContainer.append(alertDiv);
    // }



});