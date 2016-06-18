(function(app, $){
  app.collection = {
    set: function(note){
      app.$wrap.trigger("addCollection", note);
    },
    save: function (note) {
      var memo = $.extend({}, app.model, {
        memo: note
      });

      app.$wrap.trigger("addCollection", memo);
    }
  }
})(note, jQuery);