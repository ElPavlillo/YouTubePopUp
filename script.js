javascript:(function(){
    const newUrl = "https://www.youtube.com/embed/";
    ytplayer = document.getElementById("movie_player");

    function getCurrentURL () {
        return window.location.href
    }

    function popupCenter(url, title, w = 1920, h = 1080) {
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    }
  
    ytplayer.pauseVideo();

    url = getCurrentURL();
    id = url.substring(url.search("v=") + 2);

    if (id.search("&") != -1) {
        id = id.substring(0, id.search("&"))
    }

    time = ytplayer.getCurrentTime().toString();

    if(time.search("\\.") != -1) {
        id = id + "?start=" + time.substring(0,time.search("\\."))
    }

    popupCenter(newUrl + id, "YouTube");
})();