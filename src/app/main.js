require.config({
    paths: {
        knockout: '../bower_components/knockoutjs/dist/knockout',
        text: '../bower_components/text/text'
    }
});

require([
    'knockout',
    'components/menu'
], function(ko, vm) {
    'use strict';

    ko.applyBindings(vm);
});