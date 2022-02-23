$(".nutdn").click(function (e) {
  $(".formdn").addClass("hienform");
});
$(".btnclose").click(function (e) {
  $(".formdn").removeClass("hienform");
});
$(".popup").addClass("hienpopup");
$(".closepopup").click(function (e) {
  $(".popup").removeClass("hienpopup");
});
var tb = setInterval(function () {
  $(".popup").removeClass("hienpopup");
  clearInterval(tb);
}, 4000);