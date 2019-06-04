curl -X PUT http://127.0.0.1:4242/api/todos/5cf5d849df23ce6a7a417fcd \
--header "Content-Type: application/json" \
-d '{
    "name": "Update a todo"
}' -v
