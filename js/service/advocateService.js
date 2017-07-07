angular.module("MyApp")
.service("advocateService", function ($localStorage, $http, $scope, $rootScope, CONFIG) {

  this.buscarIdeiasDeUmaPessoa = function (idPessoa) {
    var query = {
      'idPessoa' : idPessoa
    };
    return $http.get(API_URL_ADVOCATE+"/advocate/"+query);
  };

  this.addTecnicaAdvocate= function (tecnica) {
    var advocate ={
       "descricao": tecnica.descricao,
       "gatilho": tecnica.gatilho,
       "moderador": {
         "id": tecnica.autor._id
       },
       "titulo": tecnica.titulo
     };
      var data = {
          'advocate' : advocate
      };
      var query = {
            method: 'POST',
            url: API_URL_ADVOCATE+"/advocate/",
            data: data,
            headers: { 'Content-Type': "application/json;charset=UTF-8" }
			};

    return $http.post(query);
  };

  this.buscarIdeiasPorID = function (idIdeia) {
    var query = {
      'idIdeia' : idIdeia
    };
    return $http.get(API_URL_ADVOCATE+"/advocate/ideia/"+query);
  };

  this.addAvaliacaoIdeiaAdvocate = function (idIdeia, voto) {

      var data = {
        "votante": {
          "id": voto.autor._id
        },
        "voto": voto.valor,
        'idIdeia' : idIdeia
      };
      var query = {
            method: 'POST',
            url: API_URL_ADVOCATE+"/advocate/"+idIdeia+"/avaliacao",
            data: data,
            headers: { 'Content-Type': "application/json;charset=UTF-8" }
      };

      return $http.post(query);
  };

  this.addComentarioIdeiaAdvocate = function (idIdeia, coment) {
    var comentario = {
        "autor": {
         "id": coment.autor._id
        },
        "data": {
         "timeInMillis": 0
        },
        "texto": coment.texto
        };
      var data = {
          'comentario' : comentario,
          'idIdeia' : idIdeia
      };
      var query = {
            method: 'POST',
            url: API_URL_ADVOCATE+"/advocate/"+idIdeia+"/comentario",
            data: data,
            headers: { 'Content-Type': "application/json;charset=UTF-8" }
      };

      return $http.post(query);
  };

  this.buscarTecnicaAdvocatePorID= function (idAdvocate) {
    var query = {
      'idAdvocate' : idAdvocate
    };
    return $http.get(API_URL_ADVOCATE+"/advocate/"+query);
  };

  this.addIdeiaAdvocate = function (idAdvocate, ideia_aux) {
      var ideia = {
         "autor": {
           "id": ideia_aux.autor._id
         },
         "data": {
           "timeInMillis": 0
         },
         "status": ideia_aux.status,
         "texto": ideia_aux.texto,
         "titulo": ideia_aux.titulo,
        };
      var data = {
          'ideia' : ideia,
          'idAdvocate' : idAdvocate
      };
      var query = {
            method: 'POST',
            url: API_URL_ADVOCATE+"/advocate/"+idAdvocate+"/ideia",
            data: data,
            headers: { 'Content-Type': "application/json;charset=UTF-8" }
      };

      return $http.post(query);
  };
});
