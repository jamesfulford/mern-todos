$(document).ready(function () {
    $.getJSON('/api/todos')
        .done(function(todos) {
            var todoElements = todos.map(function(todo) {
                return $('<li>' + todo.name + '</li>')
                    .addClass('task');
            });
            var list = $('.list');
            todoElements.forEach(function(todoElement) {
                list.append(todoElement);
            });
        })
        .fail(console.error);
});
