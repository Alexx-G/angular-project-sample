(function() {
    angular.module("app.todo.controllers", ["ngMessages", "app.todo.factories"]).controller("TodoCtrl",
        ["$scope", "$log", "TodoFactory", todoController]);

    function todoController ($scope, $log, todoFactory) {
        var self = this;

        self.tasks = todoFactory.getTodoList();

        self.addTodo = function() {
            if(!$scope.todoForm.$invalid) {
                todoFactory.addTodo(self.todoName);
                self.todoName = "";
                $scope.todoForm.$setPristine();
            }
        };
        self.removeTodo = function(taskId) {
            todoFactory.removeTodo(taskId);
        };
    }
})();