(function() {
    var beerList = {
        render: function(template, styleId, elementId, onComplete) {
            window.beerjs.api.get('/api/beers/' + styleId, function(beers) {
                if (!beers || !beers.length) return;

                var html = '<div class="row">';
                    for (var i = 0; i < beers.length; i++) {
                        html += placeholders(template, beers[i]);
                    }
                    
                    html += '</div>';   
                    onComplete(elementId, html);
            });
        }
    };

    window.beerjs = window.beerjs || {};
    window.beerjs.beerList = beerList;

})();

