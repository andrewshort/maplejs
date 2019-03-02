(function() {

    var template = function(url) {

        this.url = url;
        this.template = '';
        
        this.load = function(callback, errCallback) {
            if (this.template !== '') callback(this.template);

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
                        this.template = request.responseText;
                        callback(request.responseText);
                    }
                };
                request.open("GET", url, true);
                request.send();
            }
            catch (e) {
                console.log("Unable to connect to server - " + this.url);
            }
        };
    };

    window.beerjs = window.beerjs || {};
    window.beerjs.template = template;
})();