// ****
// this is the size of the parts diagram
// and needs to be obtained from the image properties
// ****

// image group 3-7.png
const originalImgWidth =  2809;
const originalImgHeight = 1984;

// image diagram_3-7.jpg
// const originalImgWidth = 720;
// const originalImgHeight = 405;

// ****
// this is the diameter of the cicle overlayed on the diagram
// and defined in style.css div.overlay
// ****
const originalHighlightWidth = 70;
// const originalHighlightWidth = 18;


function scaleOverlays() {

    // get all overlays
    const overlays = document.getElementsByClassName("overlay");

    // Get the image element
    const image = document.getElementById('image-map');

    // Get the image dimensions
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    console.log("image width: ", imageWidth);
    console.log("image height: ", imageHeight);
    

    // get image scaler based on original size
    var xScaler = imageWidth/originalImgWidth;
    var yScaler = imageHeight/originalImgHeight;
    console.log("xScaler: ", xScaler, " yScaler: ", yScaler);

    // scale overlays
    for (let i = 0; i < overlays.length; i++) {

        // resize overlay to match scaled image
        w = originalHighlightWidth * xScaler;
        overlays[i].style.width =  w + 'px';
        overlays[i].style.height = w + 'px';
        
        // reposition overlay to match scaled image
        x = overlays[i].offsetLeft * xScaler - overlays[i].offsetLeft - w/2;
        y = overlays[i].offsetTop * yScaler - overlays[i].offsetTop - w/2;
        console.log("new x: ", x, " y: ", y);
        overlays[i].style.transform = `translate(${x}px,${y}px)`

    }
}


window.addEventListener('resize', function(event){
    scaleOverlays();
});

// console.log("scaling");
// scaleOverlays();

window.addEventListener('load', function(event){
    console.log("onload event");
    scaleOverlays();
});