var list = $('.list');
var input = $('#todoInput');

$(document).ready(function () {
    //
    // Load Todos
    //
    $.getJSON('/api/todos')
        .done(function(todos) {
            todos.forEach(renderTodo);
        })
        .fail(console.error);

    //
    // Add listener for input
    //

    input.on('keypress', function (e) {
        if (e.which !== 13) {
            return;
        }
        $.post('/api/todos', { name: input.val() })
            .done(renderTodo)
            .done(function () {
                input.val('');
            })
            .fail(console.error);
    });
});

function renderTodo(todo) {
    var todoElem = $('<li>' + todo.name + '</li>')
        .addClass('task');
    if (todo.completed) {
        todoElem.addClass('done');
    }
    list.append(todoElem);
}
