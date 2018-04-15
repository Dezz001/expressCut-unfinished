$(document).ready(function() {


    var barberFirstName = document.getElementById("firstName-input").value;
    var barberLastName = document.getElementById("lastName-input").value;
    var barberAddress = document.getElementById("address-input").value;
    var barberCity = document.getElementById("city-input").value;
    var barberState = document.getElementById("state-input").value;
    var barberZip = document.getElementById("zip-input").value;
    var barberTelephone = document.getElementById("telephone-input").value;
    var barberEmail = document.getElementById("email-input").value;
    var barberPassword = document.getElementById("password-input").value;
    var barberConfirmPassword = document.getElementById("confirmPassword-input").value;

  // Function for creating a new list row for barbers
  function createBarberRow(barberData) {
    var newTr = $("<tr>");
    newTr.data("barber", barberData);
    newTr.append("<td>" + barberData.barberFirstName + "</td>");
    newTr.append("<td>" + barberData.barberLastName + "</td>");
    newTr.append("<td>" + barberData.barberAddress + "</td>");
    newTr.append("<td>" + barberData.barberCity + "</td>");
    newTr.append("<td>" + barberData.barberState + "</td>");
    newTr.append("<td>" + barberData.barberTelephone + "</td>");
    newTr.append("<td>" + barberData.barberEmail + "</td>");
    newTr.append("<td>" + barberData.barberCalendly + "</td>");
    
// Work on Calendly Link!!!!!
    newTr.append("<td><a href='https://calendly.com/dezz001/15min?barber_id=" + barberData.id + "'>Schedule an Appointment</a></td>");
    // newTr.append("<td><a href='/cms?barber_id=" + barberData.id + "'>Create a Post</a></td>");
    // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }


  // Function for retrieving barbers and getting them ready to be rendered to the page
  function getBarbers() {
    $.get("/api/barbers", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createBarberRow(data[i]));
      }
      renderBarberList(rowsToAdd);
      barberFirstName.val("");
      barberLastName.val("");
      barberAddress.val("");
      barberCity.val("");
      barberState.val("");
      barberTelephone.val("");
      barberEmail.val("");
      barberCalendly.val("");
    });
  }

  // A function for rendering the list of barbers to the page
  function renderBarberList(rows) {
    barberList.children().not(":last").remove();
    barberContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      barberList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }   



});

