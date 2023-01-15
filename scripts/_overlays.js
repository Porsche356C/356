function loadAreaMap() {
    const imageMapContainer = document.querySelector('#image-map-container');
    const req = new XMLHttpRequest();
    req.open("GET", "area.html", true);
    req.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(req.responseText, "text/html");
          const imageMap = doc.querySelector('map[name="image-map"]');
          const areas = imageMap.querySelectorAll('area');
  
          areas.forEach(area => {
                coords = area.getAttribute('coords').split(',');
                const div = document.createElement('div');
                div.classList.add('overlay');
                div.setAttribute('title', area.getAttribute('title'));
                div.setAttribute('data-ref', area.getAttribute('href'));
                div.setAttribute('style', `left:${coords[0]}px; right:${coords[1]}px;`);
                div.setAttribute('onclick', 'displayPopup(this)');
                div.setAttribute('onmouseover', 'toolTip(this)');
                div.setAttribute('onmouseout', 'clearTip(this)');
                imageMapContainer.appendChild(div);
          });
        }
    };
    req.send();
}
  

