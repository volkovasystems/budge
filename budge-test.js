
const assert = require( "assert" );
const budge = require( "./budge.js" );

assert.deepEqual( budge( [ 1, 2, 3 ], 1 ), [ 2, 3 ], "should be equal" );

assert.equal( Array.isArray( budge( [ 1, 2, 3 ], 2 ) ), true, "should return true" );

assert.deepEqual( budge( [ 1, 2, 3 ], true ), [ 1, 2 ], "should be equal" );

console.log( "ok" );
