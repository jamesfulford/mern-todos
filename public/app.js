$(document).ready(function () {
    $.getJSON('/api/todos')
        .done(function(todos) {
            console.info(todos);
        })
        .fail(console.error);
});
