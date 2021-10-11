let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/IMG_2802.jpg') {
    myImage.setAttribute('src', 'images/IMG_2805.jpg');
  } else {
    myImage.setAttribute('src', 'images/IMG_2802.jpg');
  }
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome 👋🏽 ' + myName;
  }
}

myButton.onclick = function () {
  setUserName();
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome 👋🏽 ' + storedName;
}
