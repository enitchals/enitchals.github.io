// TODO: ADD ABILITY TO FILTER ON TAGS
// TODO: ADD AN 'X' TO CLOSE EXPANDED IMAGE
// TODO: ADD < AND > BUTTONS TO NAGIVATE BETWEEN EXPANDED IMAGES

const removeExpandedPhoto = () => {
  const expandedPhoto = document.querySelector(".expandedImageContainer");
  expandedPhoto.parentNode.removeChild(expandedPhoto);
}

const expand = (image) => {
  const content = document.querySelector("#content");
  const expandedPhoto = document.createElement('section');
  expandedPhoto.className = 'expandedImageContainer';
  const img = document.createElement('img');
  img.className = 'expandedImage'
  img.src = `./galleries/${image.filename}`;
  expandedPhoto.append(img);
  const text = document.createElement('p');
  text.textContent = image.text;
  expandedPhoto.append(text)
  expandedPhoto.addEventListener('click', removeExpandedPhoto)
  content.append(expandedPhoto);
}

const gallery = (images, headerContent) => {
  const header = document.createElement('h2');
  header.append(headerContent);
  content.append(header);
  const gallery = document.createElement('section');
  gallery.className = 'gallery';
  for (const image of images){
    const img = document.createElement('img');
    img.src = `./galleries/${image.filename}`;
    img.className = 'galleryImage'
    img.addEventListener('click', () => expand(image))
    gallery.append(img);
  }
  return gallery;
}


const filteredGallery = (type, tagForFilter) => {
  reset();
  const content = document.querySelector("#content");
  const images = tagForFilter ? siteContent[type].body.filter(image => image.tags.includes(tagForFilter)) : siteContent[type].body
  const galleryToDisplay = gallery(images, siteContent[type].header);
  const tags = siteContent[type].body.reduce((acc, curr) =>  acc.concat(curr.tags).filter((tag, index, array) => index === array.lastIndexOf(tag)), [])
  const tagButtons = document.createElement('nav');
  tags.forEach(tag => {
    const button = document.createElement('button');
    button.textContent = tag;
    button.addEventListener('click', () => filteredGallery(type, tag));
    tagButtons.append(button);
  })
  content.append(tagButtons);
  content.append(galleryToDisplay);

}


const art = () => filteredGallery('art')

const cats = () => filteredGallery('cats')