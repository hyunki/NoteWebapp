(function(app) {

  app.util = {
    storage : {
      load: function () {
        // console.log('storage.load()');
        // localstorage initialize
        if(localStorage.getItem(app.storageKey)){
          // console.log('need set');
          var memo = $.extend({}, app.model, {
            memo: ""
          });
          localStorage.setItem(app.storageKey, JSON.stringify(memo));
        }
        return JSON.parse(localStorage.getItem(app.storageKey));
      },
      save: function (event, data) {
        // console.log('storage.save()');
        localStorage.setItem(app.storageKey, JSON.stringify(data));
      }
    }
  };
  app.$wrap.on('addCollection', app.util.storage.save);
})(note);