require.config({
    paths: {
        knockout: '../bower_components/knockoutjs/dist/knockout',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'knockout',
    'config/global',
    'viewmodels/menu',
    'components/favorites'
], function(ko, g, menu) {
    'use strict';

    ko.applyBindings(new menu());
});