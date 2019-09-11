// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  var chefSelect = $("#chefSelect");

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

  // // Getting the chefs, and their burgers
  // getChefs();

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if ($("#burger").val() !== "") {
      var newBurger = {
        name: $("#burger").val().trim(),
        chef: $("#chef").val().trim() || chefSelect.val()
      };

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

  getChefs();

  function getChefs() {
    $.get("/api/chefs", renderChefList);
  }

  $.get("/api/chefs", function (data) {

    for (var i = 0; i > data.length; i++) {
      console.log(data[i])

     
      


    }

  })

  function renderChefList(data) {
    if (!data.length) {
      window.location.href = "/chefs";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createChefRow(data[i]));
    }
    chefSelect.empty();
    console.log(rowsToAdd);
    console.log(chefSelect);
    chefSelect.append(rowsToAdd);
    chefSelect.val(1);
  }

  // Creates the author options in the dropdown
  function createChefRow(chef) {
    var listOption = $("<option>");
    listOption.attr("value", chef.id);
    listOption.text(chef.name);
    return listOption;
  }
});
