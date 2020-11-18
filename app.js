//Дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();
//Санхүүтэй ажиллах контроллер
var financeController = function () {};
//Програмын холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1.оруулах өгөгдлүүдийг олж авна.
    // 2.олж авсан өгөгдлүүдээ санхүүгийн cont-дамжуулж хадгална.
    console.log("daragdlaa");
    // 3.олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана.
    // 4.Төсвийг тооцоолно.
    // 5.Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
