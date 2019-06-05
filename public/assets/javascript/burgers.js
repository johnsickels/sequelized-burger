// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("changed devoured to", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function (event) {
    var id = $(this).data("id");
    console.log("onclick id=" + id);


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      success: function (result) {
        console.log(result);
      }
    }).then(
      function () {
        console.log("burger deleted");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if ($("#burger").val() !== "") {
      var newBurger = {
        name: $("#burger").val().trim(),
        chef: $("#chef").val().trim()
      };

      // $.ajax("/api/chefs", {
      //   type: "POST",
      //   data: newChef
      // }).then(
      //   function () {
      //     console.log("chef added");
      //   }
      // );

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    } else {
      return false;
    }
  });
});
