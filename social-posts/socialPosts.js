"use strict"
//create an object for the display component that contains a template url and a controller
const socialPosts = {

    templateUrl: "social-posts/social-posts.html", 

    controller: [function() {
        const vm = this;

        
        vm.onScreen = false;
        console.log(vm.onScreen);
        vm.posts = [];

        vm.onSubmit = () =>{
            vm.onScreen = false;
            vm.posts.push(angular.copy(entry));
            //console.log(posts);   
            console.log("test");
           };
        
        vm.loadEditSection = () => {
            vm.onScreen = true;
            console.log(vm.onScreen);
        }
    }
    ]}
angular
    .module("App")
    .component("socialPosts", socialPosts);