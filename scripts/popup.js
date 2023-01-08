
function toolTip(overlay) {
    const tip = overlay.getAttribute("title");
    const txt = '<div class="overlay-text">' + tip + '</div>';
    overlay.innerHTML = txt;
}

function clearTip(overlay) {
    overlay.innerHTML="";
}


function displayPopup(div) {
    console.log("data: ", div);
    const partId = div.getAttribute("data-ref");
    console.log("data-ref: ", partId);

    var selected_part = document.getElementById(partId);
    console.log("row: ", selected_part.innerHTML);

    // Create new row in popup table.
    document.getElementById("popup-table").rows[1].innerHTML = selected_part.innerHTML;
    const popup = document.getElementById("popup-wrapper");
    popup.style.display = "inline-block";
}
  
function closePopup() {
    const popup = document.getElementById("popup-wrapper");
    popup.style.display = "none";
}


