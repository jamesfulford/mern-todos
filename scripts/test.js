const axios = require('axios');

async function test (baseUrl) {
    const baseTodoApiUrl = `${baseUrl}/api/todos`;

    const originalTodo = { name: 'Original Todo ' + Date.now().toString() };
    const result = await axios.post(baseTodoApiUrl, originalTodo);
    const id = result.data._id;

    // Check to see if new todo is in index route
    const indexResult = await axios.get(baseTodoApiUrl);
    if (!indexResult.data.some(r => r._id === id)) {
        console.error('Post did not create on index route!', id);
    } else {
        console.log('Created in index!');
    }

    const viewResult = await axios.get(`${baseTodoApiUrl}/${id}`);
    if (viewResult.data._id !== id) {
        console.error('Post did not create on view route!', id);
    } else {
        console.log('Created in view!');
    }
    if (viewResult.data.name !== originalTodo.name) {
        console.error('Post did not save original todo\'s name!', originalTodo.name, viewResult.data.name);
    } else {
        console.log('Created in index with correct name!');
    }

    const newTodo = {
        ...originalTodo,
        name: 'Updated Todo ' + Date.now().toString()
    };
    const updateResult = await axios.put(`${baseTodoApiUrl}/${id}`, newTodo);
    const updatedViewResult = await axios.get(`${baseTodoApiUrl}/${id}`);
    if (updatedViewResult.data.name !== newTodo.name) {
        console.error('Update did not update name!', newTodo.name, updatedViewResult.data.name);
    } else {
        console.log('Updated in view!');
    }

    await axios.delete(`${baseTodoApiUrl}/${id}`);
    try {
        await axios.get(`${baseTodoApiUrl}/${id}`)
        console.error('Delete did not delete todo!', id);
    } catch (err) {
        console.log('Deleted in view!');
    }
}
test('http://127.0.0.1:4242')
    .catch(console.error);
