function outsideElementClickHandler(elementorSelector, functionHandler) {
  $(document).mouseup(function (e) {
    let container = $(elementorSelector);
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      functionHandler();
    }
  });
}
$(document).ready(function () {
  let btnTravelers = $("#btn-travelers");;
  let travelersDropdown = $("#travelersDropdown");
  let btnLanguage = $("#btnLanguage");
  let LanguageDropdown = $("#LanguageDropdown");
  // console.log(travelersDropdown);
  btnTravelers.on("click", function () {
    travelersDropdown.toggleClass("show");
    $(this).toggleClass("show");
  });
  outsideElementClickHandler("#btn-travelers", function (e) {
    travelersDropdown.removeClass("show");
    $("#btn-travelers").removeClass("show");
  });
  btnLanguage.on("click", function () {
    LanguageDropdown.toggleClass("show");
    $(this).toggleClass("show");
  });
  outsideElementClickHandler("#btnLanguage", function (e) {
    btnLanguage.removeClass("show");
    LanguageDropdown.removeClass("show");
  });
});
