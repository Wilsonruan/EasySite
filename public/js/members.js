$(document).ready(function() {
  var toMainPage = $("form")
  var userNameInput = $("input#fullName");

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  toMainPage.on("submit", function(event) {
    event.preventDefault();
    console.log(userNameInput)
    towardMainPage();
  })

  function towardMainPage () {
    window.location.replace("/mainpage");
  }
});
