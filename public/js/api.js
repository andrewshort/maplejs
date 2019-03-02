(function() {
    window.beerjs = window.beerjs || {};
    
    window.beerjs.api  = {
        get: function(url, callback) {
            var request;

            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
    
            try {
                request.onreadystatechange = function() {
                    if (request.readyState == 4) {
                        callback(JSON.parse(request.responseText));
                    }
                };
                request.open("GET", url, true);
                request.send();
            }
            catch (e) {
                console.log("Unable to connect to server - " + this.url);
            }
        }
    };
}());