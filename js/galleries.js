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

const gallery = (type, number) => {
  reset();
  const content = document.querySelector("#content");
  const header = document.createElement('h2');
  header.append(siteContent[type].header);
  content.append(header);
  const gallery = document.createElement('section');
  gallery.className = 'gallery';
  for (let i=0; i<number; i++){
    const img = document.createElement('img');
    img.src = `../${type}/${i+1}.png`
    img.className = 'galleryImage'
    img.addEventListener('click', () => expand(`../${type}/${i+1}.png`))
    gallery.append(img);
  }
  content.append(gallery);
}

const art = () => gallery('art', 6);
const cats = () => gallery('cats', 5);
