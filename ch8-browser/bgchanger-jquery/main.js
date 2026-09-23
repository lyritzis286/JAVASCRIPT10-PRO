let color = "white"; //state

$(function () {
  $("#btn").on("click", function () {
    onClickMeClicked();
  });
  renderBg(color);
});

/**
 * Controller
 */

function onClickMeClicked() {
  updateBg(); // Model function that alaters / updates the state
  renderBg(color); // render based on the updated state
}

/**
 * Model
 */
function updateBg() {
  const colors = ["black", "red", "green", "white", "blue"];
  color = colors[Math.floor(Math.random() * colors.length)];
}

/**
 * View - UI rendering
 */

function renderBg(color) {
  $("#color").text(color);
  $("body").css("background-color", color);
}
