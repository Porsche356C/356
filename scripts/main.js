
// ****
// this is the diameter of the cicle overlayed on the diagram
// and defined in style.css div.overlay
// ****
const originalHighlightWidth = 70;
var xScaler = 1;
var yScaler = 1;



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
    xScaler = imageWidth / realWidth;
    yScaler = imageHeight / realHeight;
    
    // scale overlays
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
        const diagramWrapper = document.querySelector("#diagram-wrapper");
        const overlayWrapper = document.querySelector("#overlay-wrapper");
        const diagramH1 = document.getElementById("diagram-name");

        const title = menuItem.getAttribute("title");
        const dir = menuItem.getAttribute("data-dir");
        const diagram = dir + menuItem.getAttribute("data-img");
        const overlay = dir + menuItem.getAttribute("data-overlay");
        if ( menuItem.classList.contains("vw")) {
          var type = "vw";
        } else {
          var type = "part";
        }

        // update diagrame heading and clear the image overlays
        diagramH1.innerHTML = title;
        overlayWrapper.replaceChildren();

        // parse overlay.html file and generate image clickable overlays
        const req = new XMLHttpRequest();
        req.open("GET", overlay, true);
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
                    div.classList.add(type);
                    // div.setAttribute('title', area.getAttribute('title'));
                    div.setAttribute('data-ref', area.getAttribute('href'));
                    div.setAttribute('style', `left:${coords[0]}px; top:${coords[1]}px;`);
                    div.setAttribute('onclick', "location.href = '#"+area.getAttribute('href')+"'");
                    div.setAttribute('onmouseover', 'toolTip(this)');
                    div.setAttribute('onmouseout', 'clearTip()');
                    // div.setAttribute('href', '#{$ref}');
                    overlayWrapper.appendChild(div);
                });

                img.onload = () => {
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
    scaleOverlays();
});

// scale overlays on first page load
window.addEventListener('load', function (event) {
    scaleOverlays();
});

// w3schools function to include html files from a html file
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
