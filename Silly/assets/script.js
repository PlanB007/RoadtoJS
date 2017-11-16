var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = [
	"Willy the Goblin",
	"Big Daddy",
	"Father Christmas"
];
var insertY = [
	"the soup kitchen",
	"Disneyland",
	"the White House"
];
var insertZ = [
	"spontaneously combusted",
	"melted into a puddle on the sidewalk",
	"turned into a slug and crawled away"
];

randomize.addEventListener('click', result);

console.log(insertX);
console.log(insertY);
console.log(insertZ);

function result() {
  
/*
  if(customName.value != '') {
    var name = customName.value;
    newStory.replace("Bob", name);
    
  }
*/

/*
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
    
  }
*/

  story.textContent = newStory;
  story.style.visibility = 'visible';

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  	console.log('newStory', storyText);
/*
	console.log('xItem', xItem);
	console.log('yItem', yItem);
	console.log('zItem', zItem);
*/
  var fillX = newStory.replace(":insertx:", xItem)/* , newStory.replace(":inserty:", yItem), newStory.replace(":insertz:", zItem) */;
  var fillY = fillX.replace(":inserty:", yItem);
  var fillZ = fillY.replace(":insertz:", zItem);
  
  console.log('filled', fillZ);

story.appendChild(fillZ);
  

}