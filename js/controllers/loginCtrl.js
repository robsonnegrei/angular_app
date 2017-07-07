angular.module("MyApp").controller('loginCtrl', function($scope, $localStorage, $rootScope, $http, $location, jwtHelper, usuariosService, snackbar, CONFIG){

    var setErrorMessage = function () {
      snackbar.create("Erro ao fazer Login, tente novamente");

    };

    $scope.logout = function(){
      usuariosService.logout();
    };

    function validar(token){
      $rootScope.tempToken = token;

      usuariosService.validar($rootScope.tempToken).success(function(response){

        if(response.user){
          return true;

        }else{
          return false;
        }

      }).error(function(error){
        return false;
      });
    }

    $scope.logar = function(email, senha){
      if(email && senha){
        usuariosService.validaLogin(email,senha).success(function(response){

          if(response.token){
            console.log(response.token);
            var decode = jwtHelper.decodeToken(response.token);

            //Guardando token
            $rootScope.token = response.token;
            $localStorage.token = $rootScope.token;

            //Guardando usuarioLogado
            $rootScope.usuarioLogado = decode.user;
            $localStorage.usuarioLogado = decode.user;
            console.log(decode.user);

            $location.path("inicial");

          }else{
            setErrorMessage();
          }


        }).error(function(error){
          setErrorMessage();

        });
    }else{
      setErrorMessage();
    }
    };

});
