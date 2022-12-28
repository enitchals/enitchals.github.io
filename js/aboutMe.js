const aboutMe = () => {
  reset();
  const aboutMe = document.querySelector("#content");
  const header = document.createElement('h2');
  header.append(siteContent.aboutMe.header);
  aboutMe.append(header);
  siteContent.aboutMe.body.forEach(p => {
    const para = document.createElement('p');
    para.textContent = p;
    aboutMe.append(para);
  })
}

aboutMe();

const github = () => {
  window.open('https://github.com/enitchals', '_blank');
}

const linkedin = () => {
  window.open('https://www.linkedin.com/in/enitchals/', '_blank');
}