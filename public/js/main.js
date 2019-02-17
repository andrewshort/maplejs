(function() {

    var main = {
        initialize: function() {
            document.getElementById('app').innerHTML = window.beerjs.categoryList.render();
        }
    };

    window.beerjs = window.beerjs || {};
    window.beerjs.main = main;
})();