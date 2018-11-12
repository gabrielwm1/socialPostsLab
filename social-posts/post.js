"use strict"
//create an object with properties of template and controller
const post = {

    template: `{{$ctrl.entry.title}}
               {{$ctrl.entry.thought}}`,

    bindings: {
        post: '<',

    }
};

angular
    .module("App")
    .component("post", post);