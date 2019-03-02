(function() {
    var categoryList = {
        render: function(templateLoader, onComplete) {
            window.beerjs.api.get('/api/categories', function(categories) {
                if (!categories || !categories.length) return;

                templateLoader.load(function(template) {
                    var html = '<div class="row">';
                    for (var i = 0; i < categories.length; i++) {
                        html += placeholders(template, categories[i]);
                    }
                    html += "</div>";
                    onComplete(html);
                });
            });
        }
    };

    window.beerjs = window.beerjs || {};
    window.beerjs.categoryList = categoryList;

})();

