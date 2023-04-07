// union type is a type that can be one of several types
function add(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = add(30, 26);
console.log(combinedAges);
var combinedNames = add('mlanca-c', 'sotto');
console.log(combinedNames);
