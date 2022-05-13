// let images = [
//     "https://images.unsplash.com/photo-1587583770025-32851bad462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     "https://images.unsplash.com/photo-1587583504540-fee44864486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     "https://images.unsplash.com/photo-1587575494201-11fe74d90d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
// ];
let images = [];
let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];

fetch("https://jsonplaceholder.typicode.com/photos")
  .then(response => response.json())
  .then(data => {
      for (const image of data) {
      images.push(image.thumbnailUrl);
    }
      console.log(images);
      imgTag.src=images[counter];
    });

prevBtn.addEventListener("click",slideToPrev);
nextBtn.addEventListener("click",slideToNext);

function slideToNext(){
    //console.log(counter+" >");
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    if(counter < images.length){
        let nextSlide = images[counter];
        imgTag.src = nextSlide;
    }
}

function slideToPrev(){
    //console.log(counter+" <");
    counter--;    
    if(counter < 0){
        counter = images.length-1;
    }
    if(counter >= 0){
        let prevSlide = images[counter];
        imgTag.src = prevSlide;
    }
}
 
function slide(){
    /** direction: next or previous slide */
    /** currentSlide: which image (index of the images array is visible) */
    /** container for that image: img-tag to replace the src attribute */
    let currentSlide = images[counter];

}