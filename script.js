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

for (i = 8; i < 18; i++) {
  $(`#hr${i} .description`).val(localStorage.getItem(`hr${i}`));
}
// update hours
function updateHours() {
  var currentTime = moment().hours();
  console.log(currentTime);
}
updateHours();
