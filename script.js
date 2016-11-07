console.log("seize the means of production");
$("#subForm").submit(function (ev) {
  ev.preventDefault();
  var w = ev.target.elements.selWord.value;
  var s = (-4700/9)*(ev.target.elements.speed.value) + (5522);
  $.getJSON("https://rhymebrain.com/talk?function=getRhymes&word=" + w, function(data) {
    for (var i = 0; i < 100; i++) window.clearInterval(i); //TERRIBLE
    var words = data.filter(function(l){
      return l.word.length > 2 && l.flags === "bc" && l.freq > 18;
    }).map(function(d){
      return d.word;
    });
    console.log(words);
    var cnt = 0;
    $(".toast").remove();
    Materialize.toast(words[cnt], 7*s);
    cnt++;
    window.setInterval(function() {
      if (!words[cnt]) {
        for (var i = 0; i < 100; i++) window.clearInterval(i); //TERRIBLE
        $(".toast").remove();
        Materialize.toast("<h6>No more rhymes, try another word!</h6>", 10*s);
        return;
      }
      Materialize.toast(words[cnt], 7*s);
      cnt++;
    }, s);
  });
});
