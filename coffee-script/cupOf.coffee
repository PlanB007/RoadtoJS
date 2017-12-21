(($) ->
  addToHtml = (x) ->
    $("#container").append("<h2 class='coffee'>Coffee drinkers</h2>")
    $("#container").append("<h2 class='non_coffee'>Non coffee drinkers</h2>")
)(jQuery);
