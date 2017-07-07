angular.module("MyApp", ["ngRoute", "ngStorage", "angular-jwt","angular.snackbar"])

.constant('CONFIG', {
	APIURL: "http://54.187.111.11:4000",
	// APIURL: "http://localhost:4000",

	API_URL_ADVOCATE : "http://localhost:8080/",
})

.run(function ($rootScope, $location, $localStorage) {

  //Rotas que necessitam do login
  var rotasBloqueadasUsuariosNaoLogados = ['/brainstorming', '/brainstorming-adicionar', '/brainstorming-detalhes', 'inicial'];
  var rotasBloqueadasUsuariosComuns = [];
  $rootScope.$on('$locationChangeStart', function () { //iremos chamar essa função sempre que o endereço for alterado

      /*  podemos inserir a logica que quisermos para dar ou não permissão ao usuário.
          Neste caso, vamos usar uma lógica simples. Iremos analisar se o link que o usuário está tentando acessar (location.path())
          está no Array (rotasBloqueadasUsuariosNaoLogados) caso o usuário não esteja logado. Se o usuário estiver logado, iremos
          validar se ele possui permissão para acessar os links no Array de strings 'rotasBloqueadasUsuariosComuns'
      */

      // if(!$localStorage.usuarioLogado && rotasBloqueadasUsuariosNaoLogados.indexOf($location.path()) != -1){
      //     $location.path('/acesso-negado');

      // }else
      //     if($localStorage.usuarioLogado &&rotasBloqueadasUsuariosComuns.indexOf($location.path()) != -1 &&
      //          $localStorage.usuarioLogado.admin){
      //     $location.path('/acesso-negado');
      }
  });
});
