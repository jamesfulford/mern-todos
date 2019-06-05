$(document).ready(function () {
    $.getJSON('/api/todos')
        .done(function(todos) {
            var todoElements = todos.map(function(todo) {
                var todoElem = $('<li>' + todo.name + '</li>')
                    .addClass('task');
                if (todo.completed) {
                    todoElem.addClass('done');
                }
                return todoElem;
            });
            var list = $('.list');
            todoElements.forEach(function(todoElement) {
                list.append(todoElement);
            });
        })
        .fail(console.error);
});
