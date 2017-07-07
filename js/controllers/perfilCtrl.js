angular.module("MyApp").controller('perfilCtrl', function ($scope, $http, $localStorage, constantesService, snackbar, CONFIG) {
  $scope.user = $localStorage.usuarioLogado;
  $scope.perfis = $localStorage.perfis;

  var setMensagemErro = function(){
    snackbar.create("Erro ao carregar perfis, tente novamente");
  };

  var buscarPerfis = function(){
    $http.get(CONFIG.APIURL +"/public/perfil/").success(function (data) {
        $scope.perfis = data;
        constantesService.setPerfis($scope.perfis);
    }).error(function (data) {
        setMensagemErro();
    });
  };
  $scope.init = function(){
      buscarPerfis();
  };
});
