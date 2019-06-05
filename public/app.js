$(document).ready(function () {
    //
    // Load Todos
    //
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

    //
    // Add listener for input
    //
    var input = $('#todoInput');
    input.on('keypress', function (e) {
        if (e.which !== 13) {
            return;
        }
        $.post('/api/todos', { name: input.val() })
            .done(console.log)
            .fail(console.error);
    });
});
