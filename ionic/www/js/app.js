// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });

})


.config(function($stateProvider, $urlRouterProvider) {

$stateProvider.state('home',{
  url:'/home',
  templateUrl: 'templates/home.html',
  //controller:'HomeCtrl'
})

$stateProvider.state('logout',{
  url: '/logout',
  templateUrl:'templates/logout.html',
  //controller:'AboutCrl'
})

$stateProvider.state('new-wake',{
  url:'/new-wake',
  templateUrl:'templates/new-wake.html',
  //controller:'New-wakeCtrl'

})  


$stateProvider.state('preferences',{
  url:'/preferences',
  templateUrl:'templates/preferences.html',
  //controller:'New-wakeCtrl'
})

$stateProvider.state('login',{
  url:'/login',
  templateUrl:'templates/login.html',
  //controller:'LoginCtrl'
})

$urlRouterProvider.otherwise('/home')
});

