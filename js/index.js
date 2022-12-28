reset = () => {
  const content = document.querySelector("#content");
  content.textContent = '';
}

// TODO: PICK COLOR PALETTES BASED ON THE PROFILE PICS AND UPDATE THE STYLE SHEETS TO MATCH
const profilePic = document.querySelector('.profilePic');
const randomNum = Math.ceil(Math.random() * 2)
profilePic.src = `selfies/${randomNum}.jpeg`