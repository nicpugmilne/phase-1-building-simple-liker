// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph');

for (const heart of hearts){
  heart.addEventListener('click', handleLikes);
}

function handleLikes(e){
  const clickedHeart= e.target;
  mimicServerCall("")
  .then(() => {
    if(clickedHeart.textContent === EMPTY_HEART){
      clickedHeart.textContent = FULL_HEART;
      clickedHeart.classList.add("activated-heart");
    } else if (clickedHeart.textContent === FULL_HEART){
      clickedHeart.textContent = EMPTY_HEART;
      clickedHeart.classList.remove("activated-heart");
    }
  })
  .catch(() => {
    document.querySelector('#modal').classList.remove("hidden");
    setTimeout(() => document.querySelector('#modal').classList.add("hidden"), 3000);
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
