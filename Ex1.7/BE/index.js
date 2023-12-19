const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const messages = [
    {
        author: 'SC',
        text: 'Rolls complete and a pitch is program. One BRAVO.',
    },
    {
        author: 'PAO',
        text: 'One BRAVO is an abort control model. Altitude is 2 miles.',
    },
    {
        author: 'CAPCOM',
        text: 'All is well at Houston. You are good at 1 minute.',
    },
];

app.get('/messages/:forum', (request, response) => {
    if (request.params && request.params.forum === 'nasa') {
        return response.send(messages);
    }
    return response.status(404).send({ error: 'Unknown forum' });
});

app.post('/messages/:forum', async (request, response) => {
    if (request.params && request.params.forum === 'nasa') {
        const newMessage = request.body;

        messages.push(newMessage);

        try {
            await axios.post('http://localhost:6000', newMessage);

            return response.send('OK');
        } catch (error) {
            console.error('Error sending message to frontend:', error);
            return response.status(500).send('Error sending message to frontend');
        }
    } else {
        return response.status(404).send({ error: 'Unknown forum' });
    }
});

app.listen(6000, () => console.log('Launched on port 6000!'));
