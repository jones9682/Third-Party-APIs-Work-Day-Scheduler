$(document).ready(function () {
  // display current day, month and year, moment.js
  $("#currentDay").text(moment().format("dddd, MMM Do YYYY,"));

  // save button for the user input
  $(".saveBtn").on("click", function () {
    console.log(this);
    // loads the user description in the value local storage
    var text = $(this).siblings(".description").val();
    // loads the hour in the key local storage
    var time = $(this).parent().attr("id");

    // puts keyname and value text in local storage.
    localStorage.setItem(time, text);
  });
});

// button that clears out and reloads the page
$("#cleanSlate").click(function () {
  localStorage.clear();
  location.reload();
});

// $("#hr8 .description").val(localStorage.getItem("hr8"));
// $("#hr10 .description").val(localStorage.getItem("hr10"));

// Tutor helped with this for loop to retrieve local storage

// update hours
function updateHours() {
  var currentHour = moment().hours();
  console.log(currentHour);
  for (i = 8; i < 18; i++) {
    $(`#hr${i} .description`).val(localStorage.getItem(`hr${i}`));
    // $(`#hr${i},)

    if (i < currentHour) {
      //  block of code to be executed if condition1 is true
      $(`#hr${i}`).addClass("past");
      $(`#hr${i}`).removeClass("future");
      $(`#hr${i}`).removeClass("present");
    } else if (i === currentHour) {
      //  block of code to be executed if the condition1 is false and condition2 is true
      $(`#hr${i}`).removeClass("past");
      $(`#hr${i}`).addClass("present");
      $(`#hr${i}`).removeClass("future");
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
      $(`#hr${i}`).removeClass("present");
      $(`#hr${i}`).removeClass("past");
      $(`#hr${i}`).addClass("future");
    }
  }
}
updateHours();
