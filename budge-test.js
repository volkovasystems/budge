"use strict";

const assert = require( "assert" );
const budge = require( "./budge.js" );

assert.deepEqual( budge( [ 1, 2, 3 ], 2, true ), [ 1 ] );

console.log( "ok" );
