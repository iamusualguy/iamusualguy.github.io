        $.get("https://api.myjson.com/bins/2jpm0", function (data, textStatus, jqXHR) {
        var json = JSON.stringify(data);
        var obj = jQuery.parseJSON(json);
    $("#label").html(obj.primeLabel);
                $("#links").html(obj.links);
      });
