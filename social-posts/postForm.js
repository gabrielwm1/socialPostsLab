"use strict"
//define an object with properties of template and contrll
const postForm = {

    templateUrl: "social-posts/post-form.html",
    
    
    bindings:{   
       // loadEditSection: "&",
        onSubmit: '&',
    }


};

angular
    .module("App")
    .component("postForm", postForm);