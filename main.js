
// ON PAGE LOAD
const API_ENDPOINT = 'https://icanhazdadjoke.com/';   // API URK
const XHR = new XMLHttpRequest() // STEP 1 -- using XML to get API
// STEP 5 - add event listener
document.getElementById('button').addEventListener('click' , function () {  
  getJoke() 
  setLoaderState(true)  // run loader animation
} )  

// FUNCTION TO GET JOKE
function getJoke ( ) {
  XHR.open( 'GET' , API_ENDPOINT);   // STEP 2: using XML to get API data vs using FETCH

  XHR.setRequestHeader('Accept','application/json')
  XHR.responseType = 'json'

  XHR.onload = function() {
    console.log('success')    // STEP 3: see if successful 
    console.log( XHR.response.joke)  // log joke from API request
    showJoke(XHR.response.joke)     // STEP 6: add joke to DOM
  }
  XHR.onerror = function () {
    console.error('An error occurred, please try again')  // STEP 4
    showError('An error occurred, please try again')  
  }

  XHR.send()
}

// FUNCTION TO SHOW JOKE ON DOM
function showJoke ( joke ) {
  setLoaderState(false)
  document.querySelector('#joke').innerHTML = joke
}

  // ADDITIONAL STYLE FOR UX/UI

// FUNCTION TO SHOW ERROR ON DOM
function showError ( error ) {
  setLoaderState(false)
  document.querySelector('#error-container').style.display = 'block'
  document.querySelector('#error-message').innerHTML = error
}

// LOADING INDICATOR (amimation used in CSS) - CSS display is set to none; turn off and on
function setLoaderState (isVisible) {
  if (isVisible) {
    document.querySelector('#loader').style.display = 'block'  
  } else {
    document.querySelector('#loader').style.display = 'none'  
  }
}