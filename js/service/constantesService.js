angular.module("MyApp")
.service("constantesService", function ($localStorage) {

  this.setIdeiaDetalhe = function (ideia) {
    $localStorage.ideiaDetalhe = ideia;
  };
  this.setComentariosIdeia = function (comentarios){
    $localStorage.comentarios = comentarios;
  };
  this.setDiscussao = function (discussao) {
    $localStorage.discussao = discussao;
  };
  this.setDiscussoesUsuario = function (discussoes) {
    $localStorage.discussoes = discussoes;
  };
  this.setTecnica= function (tecnica) {
    $localStorage.tecnica = tecnica;
  };
  this.setIdeias= function (ideias) {
    $localStorage.ideias = ideias;
  };
  this.setBrainstorming = function (tecnica) {
    $localStorage.brainstorming = tecnica;
  };
  this.setPerfis = function (perfis) {
    $localStorage.perfis = perfis;
  };
  this.setDiscussoesParticipo = function (discussoesParticipo) {
    $localStorage.discussoesParticipo = discussoesParticipo;
  };
  this.setParticipacoes = function (participantes) {
    $localStorage.participantes = participantes;
  };
});
