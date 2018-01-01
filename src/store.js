import {observable, computed, reaction} from 'mobx';

class Store {
	@observable store = [];

	get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

    addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
            assignee: null
		});
	}
}

const store = new Store();