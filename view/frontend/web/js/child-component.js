console.log('Holabuenas');
define([
    'uiComponent',
    'ko',
    'jquery'
], function (UiComponent, ko, $) {
    'use strict';
    return UiComponent.extend({
        // defaults: {
        //     id: ''
        // },
        initialize: function () {
            this._super();  
                // .observe({
                //     id: ''

                // })
            this.GetRickAndMorty();
            return this;
        },
        GetRickAndMorty() {
            var self= this;
            self.data = ko.observableArray([]);  
            console.log('Hola');
            $.ajax({
                url: "https://rickandmortyapi.com/api/character",
                type: 'GET',
                dataType: "json",
                data: {
                    'id': []
                }
            })
                .then($.proxy(function (data) {
                    console.log(data['results']);
                    //const dataString = JSON.stringify(data['results'][0]);
                    //console.log(dataString);
                    self.data(data['results']);
                    //this.id(dataString);
                }, this));
        }
    })
})