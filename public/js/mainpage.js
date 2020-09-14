$(document).ready(function() {
    $.get("/api/user_name").then(function(data) {
      $(".member-firstName").text(data.firstName);
    });
  });