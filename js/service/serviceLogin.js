angular.module("MyApp")
.service('usuariosService', function ($rootScope, $location, $localStorage, $http, CONFIG) {

      this.validaLogin = function(email, senha) {

           var query = {
              "email":email,
              "senha":senha
           };

          return $http.post(CONFIG.APIURL +"/public/users/buscar/", query);
      };

      this.logout = function(){
          delete $localStorage.usuarioLogado;
          delete $localStorage.discussao;
          delete $localStorage.discussoes;
          delete $localStorage.ideias;
          delete $localStorage.ideiaDetalhe;
          delete $localStorage.brainstorming;
          delete $localStorage.token;
          $location.path('/login');
      };

});
