
function toolTip(overlay) {
    const ref = overlay.getAttribute("data-ref");
    tip = document.getElementById(ref).cells[1].innerHTML;
    // tip = part.cells[1].innerHTML;
    const txt = '<div class="overlay-text">' + tip + '</div>';
    overlay.innerHTML = txt
}

function clearTip(overlay) {
    overlay.innerHTML="";
}


function displayPopup(overlay) {
    console.log("overlay: ", overlay);

    const ref = overlay.getAttribute("data-ref");
    var selected_part = document.getElementById(ref);

    // Create new row in popup table.
    const popupTable = document.getElementById("popup-table");
    popupTable.rows[1].innerHTML = selected_part.innerHTML;

    const popup = document.getElementById("popup-wrapper");
    // const compStyles = window.getComputedStyle(overlay)
    // const clickX = compStyles.getPropertyValue('left');
    // const clickY = compStyles.getPropertyValue('top');
    // console.log("event clientX: ", clickX, "Y: ", clickY);
    // popup.style.left = clickX + 'px';
    // popup.style.top = clickY + 'px';
    popup.style.display = "inline-block";
}
  
function closePopup() {
    const popup = document.getElementById("popup-wrapper");
    popup.style.display = "none";
}


