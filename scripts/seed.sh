curl -X POST http://127.0.0.1:4242/api/todos \
--header "Content-Type: application/json" \
-d '{
    "name": "Create a todo"
}'
curl -X POST http://127.0.0.1:4242/api/todos \
--header "Content-Type: application/json" \
-d '{
    "name": "Create a completed todo",
    "completed": true
}'
