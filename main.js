// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHearts = document.querySelectorAll('.like-glyph');

function likeCallback(e){
  const hearts = e.target;
  mimicServerCall("bogusUrl")
  .then(function(){
    if (hearts.innerText === EMPTY_HEART){
      hearts.innerText = FULL_HEART;;
      hearts.className = "activated-heart";
    } else {
      hearts.innerText = EMPTY_HEART;
      hearts.className = "";
    }
  })
  .catch(function(error){
    const modal = document.getElementById("modal");
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000);
  })
}
for (const glyph of likeHearts) {
  glyph.addEventListener("click", likeCallback);
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
