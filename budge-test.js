
const assert = require( "assert" );
const budge = require( "./budge.js" );

assert.deepEqual( budge( [ 1, 2, 3 ] ), [ 2, 3 ] );

assert.deepEqual( budge( [ 1, 2, 3 ], 2 ), [ 3 ] );

assert.deepEqual( budge( [ 1, 2, 3 ], true ), [ 1, 2 ] );

assert.deepEqual( budge( [ 1, 2, 3 ], 2, true ), [ 1 ] );

console.log( "ok" );
