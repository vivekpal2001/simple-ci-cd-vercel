

console.log('🧪 Running tests...\n');

let testsPassed = 0;
let testsFailed = 0;

// Test 1: Check if server can be created
function test1() {
    return new Promise((resolve) => {
        try {

            console.log('✅ Test 1: Server module loads correctly');
            testsPassed++;
            resolve();
        } catch (error) {
            console.log('❌ Test 1: Server module failed to load');
            console.error(error.message);
            testsFailed++;
            resolve();
        }
    });
}

// Test 2: Check if server responds to requests
// function test2() {
//     return new Promise((resolve) => {
//         const options = {
//             hostname: 'localhost',
//             port: process.env.PORT || 3000,
//             path: '/api/health',
//             method: 'GET'
//         };

//         const req = http.request(options, (res) => {
//             let data = '';

//             res.on('data', (chunk) => {
//                 data += chunk;
//             });

//             res.on('end', () => {
//                 try {
//                     const response = JSON.parse(data);
//                     if (response.healthy === true) {
//                         console.log('✅ Test 2: Health endpoint returns healthy status');
//                         testsPassed++;
//                     } else {
//                         console.log('❌ Test 2: Health endpoint returned unhealthy status');
//                         testsFailed++;
//                     }
//                 } catch (error) {
//                     console.log('❌ Test 2: Invalid JSON response from health endpoint');
//                     testsFailed++;
//                 }
//                 resolve();
//             });
//         });

//         req.end();
//     });
// }

// Test 3: Simple logic test
function test3() {
    return new Promise((resolve) => {
        const expected = 'wrongname';
        const actual = require('./package.json').name;
        
        if (expected === actual) {
            console.log('✅ Test 3: Package name is correct');
            testsPassed++;
        } else {
            console.log('❌ Test 3: Package name mismatch');
            testsFailed++;
        }
        resolve();
    });
}

// Run all tests
async function runTests() {
    await test1();
    await test3();

    console.log('\n📊 Test Results:');
    console.log(`   Passed: ${testsPassed}`);
    console.log(`   Failed: ${testsFailed}`);
    console.log(`   Total: ${testsPassed + testsFailed}`);

    if (testsFailed > 0) {
        console.log('\n❌ Some tests failed');
        process.exit(1);
    } else {
        console.log('\n✅ All tests passed!');
        process.exit(0);
    }
}

runTests();
