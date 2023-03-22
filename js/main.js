function outsideElementClickHandler(elementorSelector, functionHandler) {
  $(document).mouseup(function (e) {
    let container = $(elementorSelector);
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      functionHandler();
    }
  });
}
function outElement(primirElement,btnElemnt,DropdownElement){
  outsideElementClickHandler(primirElement, function (e) {
    btnElemnt.removeClass("show");
    DropdownElement.removeClass("show");
  });
}
$(document).ready(function () {
  const btnTravelers = $("#btn-travelers");;
  const travelersDropdown = $("#travelersDropdown");
  const btnLanguage = $("#btnLanguage");
  const LanguageDropdown = $("#LanguageDropdown");
  const Notifications = $("#Notifications");
  const NotificationsDropdown = $("#NotificationsDropdown");
  const profileUser = $("#profileUser");
  const profileUserDropdown = $("#profileUserDropdown");
  // console.log(travelersDropdown);
  btnTravelers.on("click", function () {
    travelersDropdown.toggleClass("show");
    $(this).toggleClass("show");
  });
  outElement("#btn-travelers",travelersDropdown,btnTravelers);
  // outsideElementClickHandler("#btn-travelers", function (e) {
  //   travelersDropdown.removeClass("show");
  //   $("#btn-travelers").removeClass("show");
  // });
  btnLanguage.on("click", function () {
    LanguageDropdown.toggleClass("show");
    $(this).toggleClass("show");
  });
  outElement("#btnLanguage",btnLanguage,LanguageDropdown);

  Notifications.on("click", function () {
    NotificationsDropdown.toggleClass("show");
    $(this).toggleClass("show");
  });
  outElement("#Notifications",Notifications,NotificationsDropdown);

  profileUser.on("click", function () {
    profileUserDropdown.toggleClass("show");
    $(this).toggleClass("show");
  });
  outElement("#profileUser",profileUser,profileUserDropdown);
  // outsideElementClickHandler("#btnLanguage", function (e) {
  //   btnLanguage.removeClass("show");
  //   LanguageDropdown.removeClass("show");
  // });

});
