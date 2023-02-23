

function clearTip() {
    popup = document.getElementById('popup-table');
    popup.remove();
}


function toolTip(overlay) {
    const x = overlay.offsetLeft;
    const y = overlay.offsetTop;

    console.log("x: ", x);
    console.log("y: ", y);


    const ref = overlay.getAttribute("data-ref");
    const table = document.getElementById("partslist");
    const selectedPart = table.rows.namedItem(ref);
    const index = selectedPart.rowIndex;
    const note = table.rows[index + 1].cloneNode(true);
    const part = selectedPart.cloneNode(true);

    part.deleteCell(4);
    console.log('selected part: ', part);
    // const partImage = selectedPart.cells.namedItem("image").innerHTML;
    // console.log('image: ', partImage);

    // Create new row in popup table.
    const template = document.getElementById("popup-template").cloneNode(true);
    partTable = template.content.querySelector("table")

    partTable.rows[1].innerHTML = part.innerHTML;
    partTable.rows[2].innerHTML = note.innerHTML;


    // overlay.append(clone);
    diagramWrapper = document.getElementById('diagram-wrapper');
    const newY = y * yScaler + 80;
    console.log("new Y: ", newY);
    partTable.style.top = newY + 'px';
    diagramWrapper.append(partTable);

}
  