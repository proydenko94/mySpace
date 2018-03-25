angular.module("app", ['ui.router', 'ngAnimate', 'ngSanitize','rzModule'])
	.run(['$state', '$rootScope', '$location',  ($state, $rootScope, $location)=>{
		var path = $location.url()
    if(path[path.length-1] != '/' && path.indexOf("?")==-1){
    	console.log(path.indexOf("?"), path, $location)
      $location.path(path+'/')
    }
	}])
	.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
	  ($locationProvider, $stateProvider, $urlRouterProvider) =>{
	    $locationProvider.html5Mode(true) 
	    $urlRouterProvider.when('','/')
	    $stateProvider
	        .state('main', {
				url:'/',
				templateUrl: "/html/index.html"
        	})
	     
	  }
	])