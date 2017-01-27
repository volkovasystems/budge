"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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

	if (!doubt(list, AS_ARRAY)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZGdlLmpzIl0sIm5hbWVzIjpbImRlcGhlciIsInJlcXVpcmUiLCJkb3VidCIsInJhemUiLCJidWRnZSIsImxpc3QiLCJjb3VudCIsInJldmVyc2UiLCJBU19BUlJBWSIsIkVycm9yIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwiTlVNQkVSIiwibGVuZ3RoIiwiQk9PTEVBTiIsInBvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCQyxPQUE3QixFQUFzQztBQUNuRDs7Ozs7Ozs7OztBQVVBLEtBQUksQ0FBQ0wsTUFBT0csSUFBUCxFQUFhRyxRQUFiLENBQUwsRUFBOEI7QUFDN0IsUUFBTSxJQUFJQyxLQUFKLENBQVcsY0FBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsWUFBWVAsS0FBTVEsU0FBTixDQUFoQjs7QUFFQU4sUUFBT0YsS0FBTUUsSUFBTixDQUFQOztBQUVBQyxTQUFRTixPQUFRVSxTQUFSLEVBQW1CRSxNQUFuQixFQUEyQixDQUEzQixDQUFSO0FBQ0EsS0FBSU4sUUFBUSxDQUFaLEVBQWU7QUFDZEEsVUFBUSxDQUFSO0FBQ0E7O0FBRUQsS0FBSUEsUUFBUUQsS0FBS1EsTUFBakIsRUFBeUI7QUFDeEIsU0FBTyxFQUFQO0FBQ0E7O0FBRUROLFdBQVVQLE9BQVFVLFNBQVIsRUFBbUJJLE9BQW5CLEVBQTRCLEtBQTVCLENBQVY7O0FBRUEsS0FBSVIsU0FBUyxDQUFiLEVBQWdCO0FBQ2YsTUFBSUMsT0FBSixFQUFhO0FBQ1pGLFFBQUtVLEdBQUw7QUFFQSxHQUhELE1BR0s7QUFDSlYsVUFBT0EsS0FBS0UsT0FBTCxFQUFQO0FBQ0FGLFFBQUtVLEdBQUw7QUFDQVYsVUFBT0EsS0FBS0UsT0FBTCxFQUFQO0FBQ0E7QUFFRCxFQVZELE1BVUs7QUFDSixTQUFPRCxLQUFQLEVBQWM7QUFDYkQsVUFBT0QsTUFBT0MsSUFBUCxFQUFhRSxPQUFiLENBQVA7O0FBRUFEO0FBQ0E7QUFDRDs7QUFFRCxRQUFPRCxJQUFQO0FBQ0EsQ0FqREQ7O0FBbURBVyxPQUFPQyxPQUFQLEdBQWlCYixLQUFqQiIsImZpbGUiOiJidWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwicGF0aFwiOiBcImJ1ZGdlL2J1ZGdlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJidWRnZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2J1ZGdlLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiYnVkZ2UtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGlzIGlzIGEgbm9uIHBlcmZvcm1hbnQgd2F5IHRvIHJlZHVjZSB0aGUgYXJyYXkgZWxlbWVudC5cblxuXHRcdEEgcmV2ZXJzZSBmbGFnIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgY291bnQsIGJ5IGRlZmF1bHQsXG5cdFx0XHR0aGUgY291bnQgcmVmZXJzIHRvIHRoZSBmaXJzdCB4IGVsZW1lbnRzLCByZXZlcnNpbmdcblx0XHRcdHdpbGwgZm9jdXMgdG8gdGhlIGxhc3QgeCBlbGVtZW50cy4gQnkgZGVmYXVsdCwgdGhpcyBpcyBmYWxzZS5cblxuXHRcdEJ5IGRlZmF1bHQsIGNvdW50IGlzIGVxdWFsIHRvIDEgd2hpY2ggd2lsbCBwb3AgdGhlIGZpcnN0IGVsZW1lbnQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRlcGhlclwiLCBcImRlcGhlclwiLFxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuXG5jb25zdCBidWRnZSA9IGZ1bmN0aW9uIGJ1ZGdlKCBsaXN0LCBjb3VudCwgcmV2ZXJzZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogXCJbKl1cIixcblx0XHRcdFx0XCJjb3VudFwiOiBcIm51bWJlclwiLFxuXHRcdFx0XHRcInJldmVyc2U6b3B0aW9uYWxcIjogXCJib29sZWFuXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhZG91YnQoIGxpc3QsIEFTX0FSUkFZICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaXN0XCIgKTtcblx0fVxuXG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRsaXN0ID0gcmF6ZSggbGlzdCApO1xuXG5cdGNvdW50ID0gZGVwaGVyKCBwYXJhbWV0ZXIsIE5VTUJFUiwgMSApO1xuXHRpZiggY291bnQgPCAwICl7XG5cdFx0Y291bnQgPSAxO1xuXHR9XG5cblx0aWYoIGNvdW50ID4gbGlzdC5sZW5ndGggKXtcblx0XHRyZXR1cm4gWyBdO1xuXHR9XG5cblx0cmV2ZXJzZSA9IGRlcGhlciggcGFyYW1ldGVyLCBCT09MRUFOLCBmYWxzZSApO1xuXG5cdGlmKCBjb3VudCA9PSAxICl7XG5cdFx0aWYoIHJldmVyc2UgKXtcblx0XHRcdGxpc3QucG9wKCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRsaXN0ID0gbGlzdC5yZXZlcnNlKCApO1xuXHRcdFx0bGlzdC5wb3AoICk7XG5cdFx0XHRsaXN0ID0gbGlzdC5yZXZlcnNlKCApO1xuXHRcdH1cblxuXHR9ZWxzZXtcblx0XHR3aGlsZSggY291bnQgKXtcblx0XHRcdGxpc3QgPSBidWRnZSggbGlzdCwgcmV2ZXJzZSApO1xuXG5cdFx0XHRjb3VudC0tO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBsaXN0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBidWRnZTtcbiJdfQ==
