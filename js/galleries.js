const removeExpandedPhoto = () => {
  const expandedPhoto = document.querySelector(".expandedImageContainer");
  expandedPhoto.parentNode.removeChild(expandedPhoto);
}

const expand = (url) => {
  const content = document.querySelector("#content");
  const expandedPhoto = document.createElement('section');
  expandedPhoto.className = 'expandedImageContainer';
  const img = document.createElement('img');
  img.className = 'expandedImage'
  img.src = url;
  expandedPhoto.append(img);
  expandedPhoto.addEventListener('click', removeExpandedPhoto)
  content.append(expandedPhoto);
}

// const subMenu = (type) => {
//   const menu = document.createElement('nav');
//   siteContent[type].subMenus?.forEach(submenu => {
//     const button = document.createElement('button');
//     button.onClick = `${submenu.gallery}()`;
//     button.textContent = submenu.header;
//     menu.append(button);
//   });
//   return menu
// }

const gallery = (type, number) => {
  reset();
  const content = document.querySelector("#content");
  const header = document.createElement('h2');
  header.append(siteContent[type].header);
  content.append(header);
  // const subMenuContent = subMenu(type);
  // console.log(subMenuContent);
  // content.append(subMenuContent);
  const gallery = document.createElement('section');
  gallery.className = 'gallery';
  for (let i=0; i<number; i++){
    const img = document.createElement('img');
    img.src = `../galleries/${type}/${i+1}.png`
    img.className = 'galleryImage'
    img.addEventListener('click', () => expand(`../${type}/${i+1}.png`))
    gallery.append(img);
  }
  content.append(gallery);
}

const cats = () => gallery('cats', 5);
const art = () => gallery('art', 6);
// const paperMedia = () => gallery('paper-media', 6);
// const paintings = () => gallery('paintings', )
// const aiArt = () => gallery('ai-art', )