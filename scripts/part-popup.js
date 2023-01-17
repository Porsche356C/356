

function clearTip() {
    popup = document.getElementById('popup-table');
    popup.remove();
}


function toolTip(overlay) {
    const x = overlay.offsetLeft;
    const y = overlay.offsetTop;

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
  