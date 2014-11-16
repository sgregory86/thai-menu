define([
    'knockout'
], function(ko) {
    'use strict';

    function MyViewModel() {
        self.items = ko.observableArray([{
            name: "Tom Yum Goong",
            price: "5.99"
        }, {
            name: "Soft Spring Rolls",
            price: "4.99"
        }, {
            name: "Pad Thai",
            price: "8.99"
        }])
    }

    return MyViewModel;
});