
$(document).ready(function() { 
  $('.loan').keyup(function () {
    $(this).val(formatNumber($(this).val(), $(this)));
    $(this).setCursorPosition($(this).val().length-3); //Three means, spaces and size of the TL (currency symbol) text
  });
    
  function formatNumber(nStr, element) {
    var elementLength= element.val().length;
    if (elementLength > 10) { // max. text input size 10 - currency symbol size
      nStr = nStr.slice(0, elementLength-4); // cut up to the currency.
    }

    var x = nStr.replace(/\D/g,'').split(',').toString();
    var rgx = /(\d+)(\d{3})/;
    
    while (rgx.test(x)) {
      x = x.replace(rgx, '$1.$2');
    }
    
    return (x.length>0) ? x+ ' TL':x;
  }
  
  // copied by https://www.sitepoint.com/jqueryhtml5-input-focus-cursor-positions/
  // you can browse for detailed information.
  $.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    });
    return this;
  };
});
