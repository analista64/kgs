function generate() {
    canvasReset();
    addElement("canvas",'span','top','Top Bar');
}

function canvasReset() {
    var p = document.getElementById("canvas");
    p.innerHTML = '';
}

function addElement(parentId, elementTag, elementId, html) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = '<h3 class="alert alert-secondary">TOP BAR</h3>';
    p.appendChild(newElement);
}