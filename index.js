var numberofelements = document.querySelectorAll(".drum").length;
for(i=0; i< numberofelements; i++ ){

document.querySelectorAll(".drum")[i].addEventListener("click", warning);
function warning(){
  var button = this.innerHTML;
  makeSound(button);
  animation(button);
 
}
}
document.addEventListener("keypress",function(){
  makeSound(event.key);
  animation(event.key);
});
function makeSound(key){
  switch (key) {
    case "w": 
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  
      break;
      case "a": 
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    
        break;
        case "s": 
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
  
      break;
      case "d": 
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
  
      break;
      case "j": 
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
  
      break;
      case "k": 
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
  
      break;
      case "l": 
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
  
     
      break;
    default:
      break;
  }
}

function animation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
  
}