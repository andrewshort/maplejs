(function() {

    var main = {
        initialize: function() {

            var styleTemplateLoader = new window.beerjs.template('/templates/categoryItem.html');
            var beerTemplateLoader = new window.beerjs.template('/templates/beerItem.html');

            window.beerjs.categoryList.render(styleTemplateLoader, function(html) {
                document.getElementById('app').innerHTML = html;
                var allStyles = document.getElementsByClassName('style-container');

                var loadList = function(elementId, html) {
                    document.getElementById(elementId).innerHTML = html;
                };

                beerTemplateLoader.load(function(template) {
                    for (var i = 0; i < allStyles.length; i++) {
                        var styleElement = allStyles[i];
                        var styleId = styleElement.attributes['data-id'].value;
                        var elementId = styleElement.id;
                        window.beerjs.beerList.render(template, styleId, elementId, loadList);
                    }
                });
            });
        }
    };

    window.beerjs = window.beerjs || {};
    window.beerjs.main = main;
})();