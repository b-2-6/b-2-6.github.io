document.addEventListener("DOMContentLoaded", () => {

     const images = document.querySelectorAll("img");

     for(image of images){
          fetch("https://cdn2.thecatapi.com/images/ebv.jpg")
          .then(response => response.json() )
          .then(data => image.src = data.message)
     }
})