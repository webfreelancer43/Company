$(function () {

    $('.header__btn').on('click', function () {
        $('.header__menu ul').slideToggle()
        $('.header__btn').toggleClass('active')
    })

})

function uniKeyCode(event, element) {
    var key = event.keyCode;
    if (key == 9) {
      console.log("Unicode KEY code: " + key + " TAB Element: " + element);
      document.getElementById(element).focus();
      return false;
    }
  }