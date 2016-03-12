angular.module('todoApp', [

]); //this is the setter syntax, you are creating an application using this one


angular.module('todoApp') //this is the getter syntax, we can use this so we don't have to make a variable to store our angular application; YAYYY no globals
      .controller('TodoController', TodoController);

TodoController.$inject = ['$scope', '$http'];

function TodoController($scope, $http){
  $scope.todos = [];
  $scope.isEditing = false;
  initTodos();
// create todo
$scope.saveTodo = function(){
  $http.post('/api/todos', $scope.newTodo)
  .then(function(response){
    initTodos();
    $scope.newTodo = {};
  })
  .catch(function(err){
    console.err(err);
  });
}
$scope.deleteTodo = function(todo){
  var id = todo._id;
  $http.delete('/api/todos/'+id)
      .then(function(response){
      initTodos();
              })
      .catch(function(err){
        console.err(err);
      });
    }

$scope.editTodo = function(todo){
  $scope.isEditing = !$scope.isEditingTodo
}

    function initTodos(){
      $http.get('/api/todos',+todo._id, todo)
          .then(function(response){
            initTodos();
            $scope.editingTodo=false;
          })
          .catch(function(err){
            console.err(err);
          });
        }
      }
