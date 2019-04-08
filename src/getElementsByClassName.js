// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // output container
  var outputArr = [];

  var nodesExists = function(element) {
    if (element.classList && element.classList.contains(className)){
      outputArr.push(element);
    } if(element.hasChildNodes()){
      for(var i = 0; i < element.childNodes.length; i++){
        nodesExists(element.childNodes[i]);
      }
    }
  }
  nodesExists(document.body); //getting inner function to run -- invoking
  return outputArr;
};
