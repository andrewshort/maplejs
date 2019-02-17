(function() {

    var categoryList = {
        getCategories : function() {
            return [{
                title : "category1",
                cardText: "Card text here"
            }, {
                title : "category2",
                cardText: "Card text here"
            }];
        },
        render: function() {
            var categories = this.getCategories();
            var html = '<div class="row">';
            for (var i = 0; i < categories.length; i++) {
                html += this.categoryItemHtml(categories[i]);
            }
            html += "</div>";
            return html;
        }, 

        categoryItemHtml: function(category) {
            return placeholders(this.categoryItemTemplateHtml(), category);
        },

        categoryItemTemplateHtml: function() {
            return `<div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{cardText}}</p>
                <a href="#" class="btn btn-primary">GO</a>
              </div>
            </div>
          </div>`;
        }
    };

    window.beerjs = window.beerjs || {};
    window.beerjs.categoryList = categoryList;

})();

