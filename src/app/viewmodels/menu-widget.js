define([
    'knockout',
    'core/items'
], function(ko, items) {
    'use strict';

    function MenuViewModel() {
        var self = this;

        self.items = ko.observableArray(items);
        self.favorites = ko.observableArray();

        self.addFavorite = function(item) {
            if (self.favorites.indexOf(item) < 0) {
                self.favorites.push(item);
            }
        };

        self.removeFavorite = function(item) {
            self.favorites.remove(item);
        };
    }

    return MenuViewModel;
});