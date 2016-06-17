console.log('my-note app.js');

var $menu = $('#menu');

// new note button event listener
$menu.on('click', '.btn-newnote', function(event){
    console.log('new note');

	var $memo = $("#memo");
	$memo.val(null);
});

// save note button event listener
$menu.on('click', '.btn-savenote', function(event){
    console.log('save note');
});

// about button event listener
$menu.on('click', '.btn-about', function(event){
    console.log('about');

    var $layer = $('#layer');

    if($layer.hasClass('PopupLayer')) {
        toggleLayer($layer, 'off');
    } else {
        window.onresize = ResizingLayer;
        toggleLayer($layer, 'on');
    }
});

// full screen button event listener
$menu.on('click', '.btn-full', function(event){
    console.log('full screen');

    var output = document.getElementById("output");

	toggleFullScreen(output);
});