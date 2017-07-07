angular.module("MyApp")
  .controller("pagMainCtrl", function ($scope, $rootScope, $http, $localStorage) {
    $scope.app="Creative Riquerement";
    $scope.discussao= $localStorage.discussao;
    $scope.discussoes= $localStorage.discussoes;
    $scope.brainstorming = $localStorage.brainstorming;
    $scope.ideaAdvocate = null;
    $scope.participacoes = null;
    $scope.ideias= $localStorage.ideias;
    $scope.user = $localStorage.usuarioLogado;
    $scope.perfis = $localStorage.perfis;
    $scope.ideiaDetalhe = $localStorage.ideiaDetalhe;

  })
  .controller('materializeCtrl', function ($scope) {
    $scope.openModal = function ($event) {
      var modalInstance = $modal.open({
        templateUrl: 'views/componentes/modal-detalhes.html',
        anchorElement: $event ? angular.element($event.target) : undefined,
        controller: 'ModalInstanceCtrl'
      });
    };
  })
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
    $scope.select = function () {
      $modalInstance.close();
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
