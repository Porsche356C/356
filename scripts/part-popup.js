
// function toolTip(overlay) {
//     const ref = overlay.getAttribute("data-ref");
//     tip = document.getElementById(ref).cells[1].innerHTML;
//     // tip = part.cells[1].innerHTML;
//     const txt = '<div class="overlay-text">' + tip + '</div>';
//     overlay.innerHTML = txt
// }

function clearTip(overlay) {
    popup = document.getElementById('popup-table');
    popup.remove();
}


function toolTip(overlay, event) {
    console.log("overlay: ", overlay);
    var e = getComputedStyle(overlay, null);
    const x = overlay.offsetLeft;
    const y = overlay.offsetTop;

    console.log("x,y: ", x, y, xScaler, yScaler);

    const ref = overlay.getAttribute("data-ref");
    const table = document.getElementById("partslist");
    const selectedPart = table.rows.namedItem(ref);
    const index = selectedPart.rowIndex;
    const note = table.rows[index + 1];


    // Create new row in popup table.
    const template = document.getElementsByTagName("template")[0];
    const clone = template.cloneNode(true);
    partTable = clone.content.querySelector("table")

    partTable.rows[1].innerHTML = selectedPart.innerHTML;
    partTable.rows[2].innerHTML = note.innerHTML;


    // overlay.append(clone);
    diagramWrapper = document.getElementById('diagram-wrapper');
    partTable.style.top = y * yScaler + 80 + 'px';
    diagramWrapper.append(partTable);

}
  



// function displayPopup(overlay) {
//     console.log("overlay: ", overlay);

//     const ref = overlay.getAttribute("data-ref");
//     const table = document.getElementById("partslist");
//     const selectedPart = table.rows.namedItem(ref);
//     const index = selectedPart.rowIndex;
//     const note = table.rows[index + 1];

//     // Create new row in popup table.
//     const popupTable = document.getElementById("popup-table");
//     popupTable.rows[1].innerHTML = selectedPart.innerHTML;
//     popupTable.rows[2].innerHTML = note.innerHTML;

//     const popup = document.getElementById("popup-wrapper");
//     popup.style.display = "inline-block";
// }
  
// function closePopup() {
//     const popup = document.getElementById("popup-wrapper");
//     popup.style.display = "none";
// }
