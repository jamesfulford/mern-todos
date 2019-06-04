

const axios = require('axios');
async function deleteAll(baseUrl) {
    const baseTodoApiUrl = `${baseUrl}/api/todos`;
    const indexResult = await axios.get(baseTodoApiUrl);

    console.info('Deleting', indexResult.data.length, 'todos...');
    await Promise.all(
        indexResult.data
            .map(todo => axios.delete(
                `${baseTodoApiUrl}/${todo._id}`
            ))
    );
    console.info('Done.');
}

deleteAll('http://127.0.0.1:4242')
    .catch(console.error);
