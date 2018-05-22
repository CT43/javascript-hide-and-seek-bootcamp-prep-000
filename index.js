function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedListValues = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedListValues.length; i++) {
   let specificValues = rankedListValues[i].children 
  
   for (let j = 0; j < specificValues.length; j++) {
     specificValues[j].innerHTML = parseInt(specificValues[j].innerHTML) + n
   }
  }
}

function deepestChild () {
  let childSearch = document.getElementById('grand-node').children[0];
  
  while (childSearch === true) {
    childSearch
    
  }
    
}