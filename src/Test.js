import React from 'react'

const postData = { message: 'Hello' };

fetch('http://localhost:5500/hello', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(data => {
    console.log('Server Response:', data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

