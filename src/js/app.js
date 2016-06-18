console.log('my-note app.js');

(function($, global, app) {
    var $menu = $('#menu');
    // new note button event listener
    $menu.on('click', '.btn-newnote', function(event){
        console.log('new note');

    	var $memo = $('#memo');
    	$memo.val(null);
    });

    // save note button event listener
    $menu.on('click', '.btn-savenote', function(event){
        console.log('save note');

        var $memo = $('#memo');
        var data = $memo.val();

        app.collection.save(data);
    });

    // about button event listener
    $menu.on('click', '.btn-about', function(event){
        console.log('about');

        var $layer = $('#layer');

        toggleLayer($layer);
    });

    // full screen button event listener
    $menu.on('click', '.btn-full', function(event){
        console.log('full screen');

        var output = document.getElementById("output");

    	toggleFullScreen(output);
    });

    var initData = app.util.storage.load();
    if(initData) {
        var $memo = $('#memo');
        $memo.val(initData.memo);

        app.collection.set(initData);
    }

})(jQuery, window, note);