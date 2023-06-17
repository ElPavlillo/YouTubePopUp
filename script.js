javascript:(function(){
    const newUrl = "https://www.youtube.com/embed/";

    function getCurrentURL () {
        return window.location.href
    }

    function popupCenter(url, title, w = 1920, h = 1080) {
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    }

    url = getCurrentURL();
    id = url.substring(url.search("v=") + 2);

    popupCenter(newUrl + id, "YouTube")
})();