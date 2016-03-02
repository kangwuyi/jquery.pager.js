(function($) {
    $.fn.pager = function(options) {
        var opts = $.extend({}, $.fn.pager.defaults, options);
        return this.each(function() {
            $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
            $('.pages li').mouseover(function() { document.body.style.cursor = "pointer"; }).mouseout(function() { document.body.style.cursor = "auto"; });
        });
    };
    function renderpager(pagenumber, pagecount, buttonClickCallback) {
        var $pager = $('<ul class="pages"></ul>');
        $pager.append(renderButton('first', pagenumber, pagecount, buttonClickCallback)).append(renderButton('prev', pagenumber, pagecount, buttonClickCallback));
        var startPoint = 1;
        var endPoint = 5;
        if (pagenumber > 4) {
            startPoint = pagenumber - 2;
            endPoint = pagenumber + 2;
        }
        if (endPoint > pagecount) {
            startPoint = pagecount - 4;
            endPoint = pagecount;
        }
        if (startPoint < 1) {
            startPoint = 1;
        }
        for (var page = startPoint; page <= endPoint; page++) {
            var currentButton = $('<li class="page-number">' + (page) + '</li>');
            function addInput(){
              $('#pager').find('li').removeClass('pgCurrent').attr('style','');
                currentButton.addClass('pgCurrent');
               var  pagenumberLiText = currentButton.text();
                currentButton.text('');
                currentButton.append('<input  id="pgCurrentInput" settext=" '+pagenumberLiText+'" readonly value=" '+pagenumberLiText+'"/>');
            }
            page == pagenumber ?  addInput(): currentButton.click(function() {
                buttonClickCallback(this.firstChild.data);
            });
            page == pagenumber ? currentButton.click(function() {
                $('.pgCurrent #pgCurrentInput').removeAttr('readOnly');
                $('.pgCurrent').css({'padding':'0','width':'46px'});
                $('#pgCurrentInput').css({'height':'24px','line-height':'24px','width':'46px','border':'none'});
                 $('#pgCurrentInput').bind('keypress',function(event){
                    if(event.keyCode == "13"){
                        var textInput = $('#pgCurrentInput').val();
                        if(textInput>pagecount){
                            return false;
                        }else{
                            var settext = $('#pgCurrentInput').attr('settext');
                            var nowLiParent = $('#pgCurrentInput').parent();
                            nowLiParent.remove('input');
                            nowLiParent.text(settext)
                            $('#pager').find('li').removeClass('pgCurrent').attr('style','');
                            var textInputInt = parseInt(textInput);
                            buttonClickCallback(textInputInt);
                        }
                   }
                    });}) : currentButton.click(function() { return false;});
            currentButton.appendTo($pager);
            currentButton = null;
        }
        $pager.append(renderButton('next', pagenumber, pagecount, buttonClickCallback)).append(renderButton('last', pagenumber, pagecount, buttonClickCallback));
        return $pager;
    }
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
        var $Button = $('<li class="pgNext pager'+buttonLabel+'"></li>');
        var destPage = 1;
        switch (buttonLabel) {
            case "first":
                destPage = 1;
                break;
            case "prev":
                destPage = pagenumber - 1;
                break;
            case "next":
                destPage = pagenumber + 1;
                break;
            case "last":
                destPage = pagecount;
                break;
        }
        if (buttonLabel == "first" || buttonLabel == "prev") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        return $Button;
    }
    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1
    };
})(jQuery);