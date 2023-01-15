
// ****
// this is the diameter of the cicle overlayed on the diagram
// and defined in style.css div.overlay
// ****
const originalHighlightWidth = 70;



// *****
// general functions
// *****
function loadXML(file, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this.responseXML);
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}





// scale the clickable image overlays to match img size
function scaleOverlays() {

    // get all overlays
    const overlays = document.getElementsByClassName("overlay");

    // Get the image element
    const image = document.getElementById('image-map');

    // Get the image dimensions
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;
    const realWidth = image.naturalWidth;
    const realHeight = image.naturalHeight;

    // get image scaler based on original size
    var xScaler = imageWidth / realWidth;
    var yScaler = imageHeight / realHeight;
    console.log("xScaler: ", xScaler, " yScaler: ", yScaler);

    // scale overlays
    console.log("overlays length: ", overlays.length);
    for (let i = 0; i < overlays.length; i++) {
        // resize overlay to match scaled image
        w = originalHighlightWidth * xScaler;
        overlays[i].style.width = w + 'px';
        overlays[i].style.height = w + 'px';

        // reposition overlay to match scaled image
        x = overlays[i].offsetLeft * xScaler - overlays[i].offsetLeft - w / 2;
        y = overlays[i].offsetTop * yScaler - overlays[i].offsetTop - w / 2;
        overlays[i].style.transform = `translate(${x}px,${y}px)`
    }
}




// load the diagram, clicakble overlays, and partslist
async function loadAreaMap(menuItem) {
    return new Promise((resolve, reject) => {
        console.log("menu item pressed: ", menuItem);
        closePopup();
        const diagramWrapper = document.querySelector("#diagram-wrapper");
        const overlayWrapper = document.querySelector("#overlay-wrapper");
        const diagramH1 = document.getElementById("diagram-name");

        const title = menuItem.getAttribute("title");
        const dir = menuItem.getAttribute("data-dir");
        const diagram = dir + menuItem.getAttribute("data-img");
        const overlay = dir + menuItem.getAttribute("data-overlay");

        // update diagrame heading and clear the image overlays
        diagramH1.innerHTML = title;
        overlayWrapper.replaceChildren();

        // parse area.htm file and generate image clickable overlays
        const req = new XMLHttpRequest();
        req.open("GET", overlay, true);
        console.log("0verlay open");
        req.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(req.responseText, "text/html");
                const imageMap = doc.querySelector('map[name="image-map"]');
                const areas = imageMap.querySelectorAll('area');

                // set img src
                var img = document.getElementById("image-map");
                img.setAttribute('src', diagram);

                areas.forEach(area => {
                    const coords = area.getAttribute('coords').split(',');
                    const div = document.createElement('div');
                    div.classList.add('overlay');
                    // div.setAttribute('title', area.getAttribute('title'));
                    div.setAttribute('data-ref', area.getAttribute('href'));
                    div.setAttribute('style', `left:${coords[0]}px; top:${coords[1]}px;`);
                    div.setAttribute('onclick', 'displayPopup(this)');
                    div.setAttribute('onmouseover', 'toolTip(this)');
                    div.setAttribute('onmouseout', 'clearTip(this)');
                    overlayWrapper.appendChild(div);
                });

                img.onload = () => {
                    console.log('image loaded');
                    scaleOverlays();
                    resolve();
                }

            }
        }


        req.send();
    });
}


// scale overlays each time the windows is resized
window.addEventListener('resize', function (event) {
    console.log('resize event');
    scaleOverlays();
    closePopup();
});

// scale overlays on first page load
window.addEventListener('load', function (event) {
    console.log('load event');
    scaleOverlays();
    closePopup();
});

