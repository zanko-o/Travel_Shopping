function outsideElementClickHandler(elementorSelector, functionHandler) {
  $(document).mouseup(function (e) {
    let container = $(elementorSelector);
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      functionHandler();
    }
  });
}
$(document).ready(function () {

    let btnTravelers = document.getElementById("btn-travelers");
    let travelersDropdown = $('#travelersDropdown')
    console.log(travelersDropdown);
    btnTravelers.addEventListener("click", function () {
        $('#travelersDropdown').addClass("show");
        $(this).addClass("show");
    });
    outsideElementClickHandler("#btn-travelers", function (e) {
      $('#travelersDropdown').removeClass("show");
      $('#btn-travelers').removeClass("show");

    });
});
