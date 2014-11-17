define([
    'knockout',
    'text'
], function(ko) {
    'use strict';

    ko.components.register('menu', {
        viewModel: {
            require: '../app/viewmodels/menu-widget'
        },
        template: {
            require: 'text!../app/views/menu-widget.html'
        }
    });
});