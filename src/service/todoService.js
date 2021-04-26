import http from './httpService';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos';
export function getTodos() {
	return http.get(apiEndpoint + '?userId=1');
}

export function deleteTodo(todo) {
	return http.delete(apiEndpoint + '/' + todo.id);
}
