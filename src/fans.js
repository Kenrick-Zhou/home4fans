var slideDur = 3000;
var fadeDur = 2000;
var pkgCount = 2;
var pkgChoice = Math.floor((Math.random() * pkgCount) + 1);
var jsonURL = "http://fans-file.b0.upaiyun.com/www/data" + pkgChoice + ".json";
var movies = [], bgs = [], j = 0;
var odr = true, first = true;

$.getJSON(jsonURL, function(data) {
  $.each(data, function(i, movie) {
    movies[i] = movie;
    bgs[j++] = movie.bgimage;
  });
  $(window).on("backstretch.before", function (e, instance, index) {
    if (first) {
      $("#m-classic2").css("display", "none");
      $("#m-classic").html(movies[index].lines).css("display", "none").fadeIn(fadeDur);
      $("#m-name2").css("display", "none");
      $("#m-name").html("——《" + movies[index].name + "》").css("display", "none").fadeIn(fadeDur);
      $("#m-people2").css("display", "none");
      $("#m-people").html("<spam id='m-director'>导演：" + movies[index].director + "</spam></br><spam id='m-actor'>主演：" + movies[index].actor + "</spam>").css("display", "none").fadeIn(fadeDur);
      first = false;
    } else {
      if (odr) {
        $("#m-classic").html(movies[index].lines).css("display", "none").fadeIn(fadeDur);
        $("#m-classic2").fadeOut(fadeDur);
        $("#m-name").html("——《" + movies[index].name + "》").css("display", "none").fadeIn(fadeDur);
        $("#m-name2").fadeOut(fadeDur);
        $("#m-people").html("<spam id='m-director'>导演：" + movies[index].director + "</spam></br><spam id='m-actor'>主演：" + movies[index].actor + "</spam>").css("display", "none").fadeIn(fadeDur);
        $("#m-people2").fadeOut(fadeDur);
      } else {
        $("#m-classic2").html(movies[index].lines).css("display", "none").fadeIn(fadeDur);
        $("#m-classic").fadeOut(fadeDur);
        $("#m-name2").html("——《" + movies[index].name + "》").css("display", "none").fadeIn(fadeDur);
        $("#m-name").fadeOut(fadeDur);
        $("#m-people2").html("<spam id='m-director'>导演：" + movies[index].director + "</spam></br><spam id='m-actor'>主演：" + movies[index].actor + "</spam>").css("display", "none").fadeIn(fadeDur);
        $("#m-people").fadeOut(fadeDur);
      }
    }
    odr = !odr;
  });
  $.backstretch(bgs, {duration: slideDur, fade: fadeDur});
});