angular.module("MyApp").config(function ($routeProvider) {

  $routeProvider.otherwise({ redirectTo: '/iniciar'});

  $routeProvider. when('/iniciar', {
    templateUrl: 'views/componentes/HOME.html',
    controller: 'pagMainCtrl'
  });
  $routeProvider. when('/acesso-negado', {
    templateUrl: 'views/acessoNegado.html',
    controller: 'pagMainCtrl'
  });
  $routeProvider. when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl'
  });

});
