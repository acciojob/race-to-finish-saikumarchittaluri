window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Function to create a promise that resolves after a random delay between min and max seconds
function createRandomPromise(min, max) {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promise resolved after ${delay} seconds.`);
        }, delay * 1000);
    });
}

// Create an array of five promises
const promises = [
    createRandomPromise(1, 5),
    createRandomPromise(1, 5),
    createRandomPromise(1, 5),
    createRandomPromise(1, 5),
    createRandomPromise(1, 5)
];

// Using Promise.any to wait for the first promise to resolve
Promise.any(promises)
    .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = result;
    })
    .catch(error => {
        // In case all promises reject (which should not happen in this example)
        console.error('All promises were rejected:', error);
    });

