const csv = require('../index');

// Test 1 - Files are in the same directory
csv('read.csv', 'write.json', err => {
    if (err) console.error('TEST 1: FAILED');
    else console.log('TEST 1: PASSED');
});

// Test 2 - Files are in another directory
csv('./dir/read.csv', './dir/write.json', err => {
    if (err) console.error('TEST 2: FAILED');
    else console.log('TEST 2: PASSED');
});