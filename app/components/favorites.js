define([
    'knockout',
    'text'
], function(ko) {
    'use strict';

    ko.components.register('menu', {
        viewModel: {
            require: '../app/viewmodels/component-menu-widget'
        },
        template: {
            require: 'text!../app/views/component-menu.html'
        }
    });
});