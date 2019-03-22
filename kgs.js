function getText() {
  return document.getElementById('data').value;
}

function generate() {
    canvasReset();
    var text = getText();
    var tabs = getTabs(text);
    createTabs(tabs);
}

function getTabs(text) {
  var tabs = [];
  var temp = text.split('FORM:');
  temp.forEach(tab => {
    if (tab) {
      if (tab.indexOf('\n') > -1) {
        tabs.push(tab.substr(0,tab.indexOf('\n')));
      } else {
        tabs.push(tab);
      }
    }
  });
  return tabs;
}

function canvasReset() {
  var p = document.getElementById("canvas");
  //p.innerHTML = '';  
}

function addElement(parentId, elementTag, where) {
  if (!where) where = "beforeend";
  var p = document.getElementById(parentId);
  p.insertAdjacentHTML(where, elementTag);
}

function createTabs(tabs) {
  // No saltamos el Home
  for (let index = 1; index < tabs.length; index++) {
    addElement("nav-tab", htmlNavTab('nav-tab-'+index, tabs[index]));
    addElement("nav-tabContent", htmlTabContent('tab-content-'+index));
  };
}

function htmlNavTab(id, title) {
  var s ='<a class="nav-item nav-link" id="'+ id +'" data-toggle="tab" href="#'+ id +'">'+ title +'</a>';
  return s;
}
function htmlTabContent(id) {
  return '<div class="tab-pane fade show" id="'+id+'">'+id+'Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</div>';
}

function guardar() {
  var filename = document.getElementById('project').value;
  var text = getText();
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".kgs");
}
