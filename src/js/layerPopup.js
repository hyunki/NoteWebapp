//레이어 가운데 띄우고 마스크 띄우기
function toggleLayer( obj, s ) {
    // console.log('toggle popup layer');

    var zidx = $("#lay_mask").css("z-index");
 
    if(s == "on") {
        console.log('on popup layer');
        //화면중앙에 위치시키기
        var left = ( $(window).scrollLeft() + ($(window).width() - obj.width()) / 2 );
        var top = ( $(window).scrollTop() + ($(window).height() - obj.height()) / 2 );
 
        // 높이가 0이하면 0으로 변경
        if(top<0) top = 0;
        if(left<0) left = 0;
 
        var layer_idx = Number(zidx) + 10;
 
        $("#lay_mask").css("z-index", layer_idx);
 
        obj.css({"left":left, "top":top, "z-index":layer_idx}).addClass("PopupLayer");
        $("body").append(obj);
 
        wrapWindowByMask();//배경 깔기
        obj.show();//레이어 띄우기
    }
 
    if(s == "off") {
        console.log('off popup layer');
        if($(".PopupLayer").length > 1) {
            var layer_idx = zidx - 10;
            $("#lay_mask").css("z-index", layer_idx);
        } else {
            $("#lay_mask").hide();
        }
 
        obj.removeClass("PopupLayer").hide();
    }
 
    if(s == "off2") { //레이어에서 다른 레이어를 띄울 경우 마스크는 안닫기 위한 처리
        obj.removeClass("PopupLayer").hide();
    }
}
 
//마스크 띄우기
function wrapWindowByMask() { 
 
    var mask = $("#lay_mask");
 
    //화면의 높이와 너비를 구한다. 
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
 
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다. 
    mask.css({'width':maskWidth,'height':maskHeight});
    mask.show();
}
 
// 사이즈 리사이징
function ResizingLayer() {
    console.log('resizing');
    if($("#lay_mask").css("display") == "block") {
        //화면의 높이와 너비를 구한다. 
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
 
        //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다. 
        $("#lay_mask").css({'width':maskWidth,'height':maskHeight});  
 
        $(".PopupLayer").each(function () {
            var left = ( $(window).scrollLeft() + ($(window).width() - $(this).width()) / 2 );
            var top = ( $(window).scrollTop() + ($(window).height() - $(this).height()) / 2 );
 
            if(top<0) top = 0;
            if(left<0) left = 0;
 
            $(this).css({"left":left, "top":top});
        });
    }
}