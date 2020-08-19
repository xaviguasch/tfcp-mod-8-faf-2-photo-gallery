/* 
    1. 
        Use fetch() to load data from photos.json
        
        Display the photos inside of a FlexBox container
            The src will be https://picsum.photos/id/${photo.id}/100/100
            The alt text will be the photo.title from the json

        Use Flexbox to display the photos in a Row 
            The Row should Wrap to a new line on overflow
            Give each photo a white 0.1rem solid border
            Rounded corners at 0.7rem border-radius
            Each photo should be at least 1rem away from the photos around it
*/

async function getPhotos() {
  const response = await fetch('./photos.json')
  const photos = await response.json()

  const images = photos
    .map((photo) => {
      return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}">`
    })
    .join('')

  document.body.innerHTML = `<div class="my-photos">
    ${images}
  </div>`

  document.body.append(htmlContent)
}

getPhotos()
