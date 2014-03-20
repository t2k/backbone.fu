(function() {
  define(["msgbus", "apps/header/list/controller"], function(msgBus, Controller) {
    var API;
    API = {
      list: function() {
        return new Controller({
          region: msgBus.reqres.request("header:region")
        });
      }
    };
    return msgBus.commands.setHandler("start:header:app", function() {
      return API.list();
    });
  });

}).call(this);
