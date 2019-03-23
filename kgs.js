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
    addElement("nav-tab", htmlNavTab('nav-tab-'+index, tabs[index], 'tab-content-'+index));
    addElement("nav-tabContent", htmlTabContent('tab-content-'+index));
  };
}

function htmlNavTab(id, title, contentId) {
  var s ='<a class="nav-item nav-link" id="'+ id +'" data-toggle="tab" href="#'+ contentId +'">'+ title +'</a>';
  return s;
}
function htmlTabContent(id) {
  var html = '<div class="tab-pane fade show" id="'+id+'">'+
    '  <h5 class="alert alert-primary">Horas</h5>'+
    '  <input type="button" class="btn btn-block btn-danger" value="Volver a Home"/>'+
    '  <div class="row" style="height:400px;">'+
    '    <div class="card col-sm-12 d-table h-100">'+
    '      <div class="d-table-cell align-middle">'+
    '       <center>'+
    '        <ul class="list-group" id="horas">'+
    '          <li class="list-group-item">13:05:50</li>'+
    '          <li class="list-group-item">13:05:44</li>'+
    '          <li class="list-group-item">13:05:25</li>'+
    '          <li class="list-group-item">13:05:22</li>'+
    '          <li class="list-group-item">13:05:10</li>'+
    '        </ul>'+
    '       </center>'+
    '      </div>'+
    '    </div>'+
    '  </div>'+
    '  </div>'+
    '</div>';
  return html;
}

function guardar() {
  var filename = document.getElementById('project').value;
  var text = getText();
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".kgs");
}
