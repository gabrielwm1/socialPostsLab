"use strict"
//create an object with properties of template and controller
const post = {

    template: `{{$ctrl.post.title}}
               {{$ctrl.post.thought}}`,

    bindings: {
        post: "<",
        
    }
}

angular
    .module("App")
    .component("post", post);