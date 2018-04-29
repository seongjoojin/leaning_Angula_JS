(function() {
    var app = angular.module('todo', []);

    app.controller('TodoCtrl', function($scope) {
        $scope.todos = [
            {
                title:'요가 수행',
                completed:false,
                createAt: Date.now(),
                id:0
            },
            {
                title:'앵귤러 학습',
                completed:false,
                createAt: Date.now(),
                id:1
            },
            {
                title:'운동하기',
                completed:true,
                createAt: Date.now(),
                id:2
            }
        ];

        $scope.remove = function(todo) {
            // find todo index in todos
            var idx = $scope.todos.findIndex(function(item) {
                return item.id === todo.id
            })
            //remove from todos
            if(idx > -1){
                $scope.todos.splice(idx, 1)
            }
        };

        $scope.add = function(newTodoTitle) {
            // create new todo
            var newTodo = {
                title:newTodoTitle,
                completed:false,
                createAt:Date.now()
            };
            // push into todos
            $scope.todos.push(newTodo);

            // empty form
            $scope.newTodoTitle = "";
        };
    });
})();