// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //array container
  var outputArr = [];

  //if null, boolean, number, string
  if (obj === null) {
    return 'null';
  }
  if (obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }

  //if object is an array, iterate
  if(Array.isArray(obj)){
    if(obj[0] === undefined){
      return '[]';
    } else{
      obj.forEach(function(value) {
        outputArr.push(stringifyJSON(value))
      });
    } return '[' + outputArr + ']';
  }

  //if object
  if (obj instanceof Object) {
    var outputArr2 = [];
    if(Object.keys(obj).length === 0) {
      return '{}';
    }
    for (var key in obj) {
      if(obj[key] === undefined) {
        return '{}';
      }
      outputArr2.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
  return '{' + outputArr2 + '}';
  }
};
