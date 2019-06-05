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

    list.on('click', 'span', function () {
        var todoItem = $(this).parent();
        $.ajax({
            method: 'DELETE',
            url: '/api/todos/' + todoItem.data('id'),
        })
            .done(function () {
                todoItem.remove();
            })
            .fail(console.error);
    });
});

function renderTodo(todo) {
    var todoElem = $('<li>' + todo.name + '<span>X</span></li>')
        .addClass('task')
        .data('id', todo._id);
    if (todo.completed) {
        todoElem.addClass('done');
    }
    list.append(todoElem);
}
