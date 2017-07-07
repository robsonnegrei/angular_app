angular.module("MyApp").service('Access', function($q, $rootScope, $localStorage){
  var Access = {};

  Access.OK =  200;
  Access.UNAUTHORIZED = 401;
  Access.FORBIDDEN= 403;

  Access.isAnonymous = function(){
      if(localStorage.token){
          return $q.reject(Access.OK);
      }else{
          return Access.OK;
      }
  };
  Access.isAuthenticatedModerador = function(){
      if(localStorage.token && localStorage.user.tipo_usuario == MODERADOR){
          return Access.OK;
      }else{
          return $q.reject(Access.UNAUTHORIZED);
      }
  };

  Access.isAuthenticated = function(){
      if(localStorage.token){
          return Access.OK;
      }else{
          return $q.reject(Access.UNAUTHORIZED);
      }
  };

  Access.isOtherwise = function(){
    return $q.reject(Access.FORBIDDEN);
  };

  Access.isPublic = function(){
    return Access.OK;
  };

});
