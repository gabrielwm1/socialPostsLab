"use strict"
//define an object with properties of template and contrll
const postForm = {

    templateUrl: "social-posts/post-form.html",
    
    
    bindings:{   
        onScreen: "<",
        onSubmit: "&",
    }


};

angular
    .module("App")
    .component("postForm", postForm);