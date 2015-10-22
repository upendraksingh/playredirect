function myfunction()
{
	var appstoreFail = "http://themeshapp.com/";
	if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false)
    {
        //If the app is not installed the script will wait for 2sec and redirect to web.
        var loadedAt = +new Date;
        setTimeout(
                   function(){
                       if (+new Date - loadedAt < 2000){
                   window.location = appstoreFail;
                       }
                   }
                   ,25);
        window.open("https://itunes.apple.com/in/app/bigbasket.com/id660683603?mt=8","_self");
		
    } else if(navigator.userAgent.match(android\s([0-9\.]*))){
		var loadedAt = +new Date;
        setTimeout(
                   function(){
                       if (+new Date - loadedAt < 2000){
                   window.location = appstoreFail;
                       }
                   }
                   ,25);
        window.open("https://play.google.com/store/apps/details?id=indwin.c3.shareapp","_self");
		
    } else {
		window.open(appstoreFail,"_self");
	}
}