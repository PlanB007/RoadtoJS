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

function result() {
  
  if(customName.value != '') {
    var name = customName.value;
  }
  
  var withName = storyText.replace("Bob", name);

/*
	Dunno the formulea 
	
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
  }
  
*/

  var newStory = withName;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  	
  var fillX = withName.replace(":insertx:", xItem);
  var fillY = fillX.replace(":inserty:", yItem);
  var fillZ = fillY.replace(":insertz:", zItem);
  var finalText = fillZ.replace(":insertx:", xItem);
  
  story.textContent = finalText;
  story.style.visibility = 'visible';  

}