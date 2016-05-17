JavaScript Array.prototype.slice()
The slice() method returns a shallow copy of a portion of an array into a new array object.
arr.slice([begin[, end]])
Necessity	Parameter	Description
Required	arr	An Array object.
Required	begin	The beginning of the specified portion of array.
Optional	end	The end of the specified portion of array.
Return: The slice method returns an Array object containing the specified portion of arrayObj.

MDN link | MSDN link

Examples

var origArray = [3, 5, 7, 9];
var newArray = origArray. slice(0, -1);
document.write(origArray);
document.write("<br/>");
newArray = origArray. slice(-2);
document.write(newArray);

// Output:
// 3,5,7,9
// 7,9
// Our good friend the citrus from fruits example
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// citrus contains ['Orange','Lemo
