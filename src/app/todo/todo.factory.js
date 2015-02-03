(function() {
	angular.module("app.todo.factories", []).factory("TodoFactory", todoFactory);

	function todoFactory() {
		function Todo(name) {
			this.name = name;
			this.closed = false;
		}

		var todoList = [];
		var addTodo = function(name) {
			todoList.push(new Todo(name));
		}
		var removeTodo = function(todoIndex) {
			todoList.splice(todoIndex);
		}
		return {
			addTodo: addTodo,
			removeTodo: removeTodo,
			getTodoList: function() {
				return todoList;
			}
		}
	}
})();