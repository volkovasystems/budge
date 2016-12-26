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
			will focus to the last x elements. By default, this is false.

		By default, count is equal to 1 which will pop the first element.
	@end-module-documentation

	@include:
		{
			"depher", "depher",
			"doubt": "doubt",
			"raze": "raze"
		}
	@end-include
*/

var depher = require("depher");
var doubt = require("doubt");
var raze = require("raze");

var budge = function budge(list, count, reverse) {
	/*;
 	@meta-configuration:
 		{
 			"list:required": "[*]",
 			"count": "number",
 			"reverse:optional": "boolean"
 		}
 	@end-meta-configuration
 */

	if (!doubt(list).AS_ARRAY) {
		throw new Error("invalid list");
	}

	var parameter = raze(arguments);

	list = raze(list);

	count = depher(parameter, NUMBER, 1);
	if (count < 0) {
		count = 1;
	}

	if (count > list.length) {
		return [];
	}

	reverse = depher(parameter, BOOLEAN, false);

	if (count == 1) {
		if (reverse) {
			list.pop();
		} else {
			list = list.reverse();
			list.pop();
			list = list.reverse();
		}
	} else {
		while (count) {
			list = budge(list, reverse);

			count--;
		}
	}

	return list;
};

module.exports = budge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZGdlLmpzIl0sIm5hbWVzIjpbImRlcGhlciIsInJlcXVpcmUiLCJkb3VidCIsInJhemUiLCJidWRnZSIsImxpc3QiLCJjb3VudCIsInJldmVyc2UiLCJBU19BUlJBWSIsIkVycm9yIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwiTlVNQkVSIiwibGVuZ3RoIiwiQk9PTEVBTiIsInBvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCQyxPQUE3QixFQUFzQztBQUNuRDs7Ozs7Ozs7OztBQVVBLEtBQUksQ0FBQ0wsTUFBT0csSUFBUCxFQUFjRyxRQUFuQixFQUE2QjtBQUM1QixRQUFNLElBQUlDLEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxZQUFZUCxLQUFNUSxTQUFOLENBQWhCOztBQUVBTixRQUFPRixLQUFNRSxJQUFOLENBQVA7O0FBRUFDLFNBQVFOLE9BQVFVLFNBQVIsRUFBbUJFLE1BQW5CLEVBQTJCLENBQTNCLENBQVI7QUFDQSxLQUFJTixRQUFRLENBQVosRUFBZTtBQUNkQSxVQUFRLENBQVI7QUFDQTs7QUFFRCxLQUFJQSxRQUFRRCxLQUFLUSxNQUFqQixFQUF5QjtBQUN4QixTQUFPLEVBQVA7QUFDQTs7QUFFRE4sV0FBVVAsT0FBUVUsU0FBUixFQUFtQkksT0FBbkIsRUFBNEIsS0FBNUIsQ0FBVjs7QUFFQSxLQUFJUixTQUFTLENBQWIsRUFBZ0I7QUFDZixNQUFJQyxPQUFKLEVBQWE7QUFDWkYsUUFBS1UsR0FBTDtBQUVBLEdBSEQsTUFHSztBQUNKVixVQUFPQSxLQUFLRSxPQUFMLEVBQVA7QUFDQUYsUUFBS1UsR0FBTDtBQUNBVixVQUFPQSxLQUFLRSxPQUFMLEVBQVA7QUFDQTtBQUVELEVBVkQsTUFVSztBQUNKLFNBQU9ELEtBQVAsRUFBYztBQUNiRCxVQUFPRCxNQUFPQyxJQUFQLEVBQWFFLE9BQWIsQ0FBUDs7QUFFQUQ7QUFDQTtBQUNEOztBQUVELFFBQU9ELElBQVA7QUFDQSxDQWpERDs7QUFtREFXLE9BQU9DLE9BQVAsR0FBaUJiLEtBQWpCIiwiZmlsZSI6ImJ1ZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE2IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYnVkZ2UvYnVkZ2UuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImJ1ZGdlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9idWRnZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImJ1ZGdlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0VGhpcyBpcyBhIG5vbiBwZXJmb3JtYW50IHdheSB0byByZWR1Y2UgdGhlIGFycmF5IGVsZW1lbnQuXG5cblx0XHRBIHJldmVyc2UgZmxhZyB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGNvdW50LCBieSBkZWZhdWx0LFxuXHRcdFx0dGhlIGNvdW50IHJlZmVycyB0byB0aGUgZmlyc3QgeCBlbGVtZW50cywgcmV2ZXJzaW5nXG5cdFx0XHR3aWxsIGZvY3VzIHRvIHRoZSBsYXN0IHggZWxlbWVudHMuIEJ5IGRlZmF1bHQsIHRoaXMgaXMgZmFsc2UuXG5cblx0XHRCeSBkZWZhdWx0LCBjb3VudCBpcyBlcXVhbCB0byAxIHdoaWNoIHdpbGwgcG9wIHRoZSBmaXJzdCBlbGVtZW50LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJkZXBoZXJcIiwgXCJkZXBoZXJcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcblxuY29uc3QgYnVkZ2UgPSBmdW5jdGlvbiBidWRnZSggbGlzdCwgY291bnQsIHJldmVyc2UgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJsaXN0OnJlcXVpcmVkXCI6IFwiWypdXCIsXG5cdFx0XHRcdFwiY291bnRcIjogXCJudW1iZXJcIixcblx0XHRcdFx0XCJyZXZlcnNlOm9wdGlvbmFsXCI6IFwiYm9vbGVhblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIWRvdWJ0KCBsaXN0ICkuQVNfQVJSQVkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaXN0XCIgKTtcblx0fVxuXG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRsaXN0ID0gcmF6ZSggbGlzdCApO1xuXG5cdGNvdW50ID0gZGVwaGVyKCBwYXJhbWV0ZXIsIE5VTUJFUiwgMSApO1xuXHRpZiggY291bnQgPCAwICl7XG5cdFx0Y291bnQgPSAxO1xuXHR9XG5cblx0aWYoIGNvdW50ID4gbGlzdC5sZW5ndGggKXtcblx0XHRyZXR1cm4gWyBdO1xuXHR9XG5cblx0cmV2ZXJzZSA9IGRlcGhlciggcGFyYW1ldGVyLCBCT09MRUFOLCBmYWxzZSApO1xuXG5cdGlmKCBjb3VudCA9PSAxICl7XG5cdFx0aWYoIHJldmVyc2UgKXtcblx0XHRcdGxpc3QucG9wKCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRsaXN0ID0gbGlzdC5yZXZlcnNlKCApO1xuXHRcdFx0bGlzdC5wb3AoICk7XG5cdFx0XHRsaXN0ID0gbGlzdC5yZXZlcnNlKCApO1xuXHRcdH1cblxuXHR9ZWxzZXtcblx0XHR3aGlsZSggY291bnQgKXtcblx0XHRcdGxpc3QgPSBidWRnZSggbGlzdCwgcmV2ZXJzZSApO1xuXG5cdFx0XHRjb3VudC0tO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBsaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBidWRnZTtcbiJdfQ==
