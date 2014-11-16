define([
    'knockout',
    'text'
], function(ko) {
    'use strict';

    ko.components.register('menu', {
        viewModel: {
            require: '../app/viewmodels/component-favorites-widget'
        },
        template: {
            require: 'text!../app/views/component-favorites.html'
        }
    });
});