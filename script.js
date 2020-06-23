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

    // puts description text in local storage.
    localStorage.setItem(time, text);
  });

  $("#hr8 .description").val(localStorage.getItem("hr8"));
});
