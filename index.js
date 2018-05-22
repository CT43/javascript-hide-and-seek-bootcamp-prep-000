function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseByRank(n) {
  var rankedListValues = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedListValues.length; i++) {
   let specificValues = rankedListValues[i].children 
  }
   for (let j = 0; j < specificValues.length; J++) {
     specificValues[i].innerHTML = 
   }
  
}