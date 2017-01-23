var BG = chrome.extension.getBackgroundPage();
$('#frodShow').prop('checked', !BG.active);
$("#frodShow").change(function() {
    var $input = $(this);
   if ($input.prop('checked')) {BG.changeActive(false);}
    else {BG.changeActive(true);}

});

