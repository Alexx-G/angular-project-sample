(function() {
	angular.module("app.todo.controllers").controller("TodoCtrl", ["TodoFactory", todoController]);

	function todoController (todoFactory) {
		var self = this;

		self.tasks = todoFactory.getTodoList();

		self.addTask = function(taskName) {
			todoFactory.addTodo(taskName);
		};
		self.removeTask = function(taskId) {
			todoFactory.removeTodo(taskId);
		};
	}
})();