angular.module("services",[])
	.factory('getGroupsService', ['$http', function($http){
		return {
    	getGroups: function(){
      	return  $http.get('http://localhost:8080/CreativeAPI/brainwriting?idPessoa=1');
    	}
  	};
	}])
	.factory('getUniqueGroupService', ['$http', function($http){
		return {
    	getGroup: function(id){
      	return  $http.get('http://localhost:8080/CreativeAPI/brainwriting/' + id);
    	}
  	};
	}])
	.factory('updateUniqueGroupService', ['$http', function($http){
		return {
    	getGroup: function(title, description, topic, status, id ){
      	return  $http.post('http://localhost:8080/CreativeAPI/brainwriting/1');
    	}
  	};
	}])
	.factory('createGroupService', ['$http', function($http){
		return {
    	postGroup: function(descricao, id, fase, gatilho, titulo){
				var data = {
										  'descricao': descricao,
										  'facilitador': {
										    'id': id
										  },
										  'fase': fase,
										  'gatilho': gatilho,
										  'titulo': titul
										};
			return $http({
			            method: 'POST',
			            url: 'http://localhost:8080/CreativeAPI/brainwriting',
			            data: data,
			            headers: { 'Content-Type': "application/json;charset=UTF-8" }
			        });
    	}
  	};
	}])
//---------------------------------------------------------------------------------
	.factory('getIdeasService', ['$http', function($http){
		return {
			getIdeas: function(groupId){
				return  $http.get('http://localhost:8080/CreativeAPI/brainwriting/'+ groupId +'/ideia');
			}
		};
	}])
;
