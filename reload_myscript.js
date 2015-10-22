function myfunction(){
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false) {
        window.open("https://itunes.apple.com/in/app/bigbasket.com/id660683603?mt=8","_self");

    } else if(navigator.userAgent.match(/(android)/ig) ? true : false) {
        window.open("https://play.google.com/store/apps/details?id=indwin.c3.shareapp","_self");

    } else {
        window.open("http://themeshapp.com/","_self");
    }
}