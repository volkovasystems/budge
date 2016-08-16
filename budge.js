"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "budge",
			"path": "budge/budge.js",
			"file": "budge.js",
			"module": "budge",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/budge.git",
			"test": "budge-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		This is a non performant way to reduce the array element.

		A reverse flag will be applied to the count, by default,
			the count refers to the first x elements, reversing
			will focus to the last x elements.

		By default, count is equal to 1 which will pop the first element.
	@end-module-documentation

	@include:
		{
			"raze": "raze"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

var budge = function budge( list, count, reverse ){
	/*;
		@meta-configuration:
			{
				"list:required": "[*]",
				"count": "number",
				"reverse:optional": "boolean"
			}
		@end-meta-configuration
	*/

	count = count || 1;
	if( typeof count != "number" ){
		throw new Error( "invalid count" );
	}

	if( count == 1 ){
		list = raze( list ).reverse( );
		list.pop( );
		list = list.reverse( );

	}else{
		if( reverse ){
			count = list.length - count;
		}

		while( count ){
			list = budge( list );

			count--;
		}
	}

	return list;
};

if( typeof module != "undefined" ){
	module.exports = budge;
}
