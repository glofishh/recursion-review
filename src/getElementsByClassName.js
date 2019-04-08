// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // output container
  var outputArr = [];

  var nodesExists = function(node) {
    if (node.classList && node.classList.contains(className)){
      outputArr.push(node);
    } if(node.hasChildNodes()){
      for(var i = 0; i < node.childNodes.length; i++){
        nodesExists(node.childNodes[i]);
      }
    }
  }
  nodesExists(document); //getting inner function to run -- invoking
  return outputArr;
};
