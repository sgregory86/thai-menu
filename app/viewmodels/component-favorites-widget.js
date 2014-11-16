define([
    'knockout'
], function(ko) {
    var self = this;

    function FavoriteWidgetViewModel() {
        self.favorites = ko.observableArray();
    }

    FavoriteWidgetViewModel.prototype.addFavorite = function(item) {
        if (self.favorites.indexOf(item) < 0) {
            self.favorites.push(item);
        }
    };

    FavoriteWidgetViewModel.prototype.removeFavorite = function(item) {
        self.favorites.remove(item);
    };

    return FavoriteWidgetViewModel;
});