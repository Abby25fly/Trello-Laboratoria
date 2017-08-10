
Input.onclick = function () {
  var grupoLi = document.getElementById("grupoLista");
  // crea Input inicial
  var inputText = document.createElement("INPUT");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", "addText");
    inputText.setAttribute("placeholder", "Ingresa el nombre de la lista");
    grupoLi.appendChild(inputText);
  // Crea btn de guardar lista
  var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Guardar");
    btn.setAttribute("id","btnSaveList");
    btn.appendChild(t);
    grupoLi.appendChild(btn);
  // funcion que genera la lista y tarjetas
  btnSaveList.onclick= function() {
    var allList = document.getElementById("tarea");
    var divTabla = document.getElementById("lista-tarea");
    var titleList=document.getElementById("addText").value;
    var title = document.createElement("p");
    title.setAttribute("class","title");
    title.setAttribute("contenteditable","")
    var ntext = document.createTextNode(titleList);
    title.appendChild(ntext);
    if (titleList === "") {
      alert("No has escrito nada!");
    } else {
      divTabla.appendChild(title);
    }
    document.getElementById("addText").value = "";

    // crear boton - agregar tarea
    var tarjeta = document.getElementById("card");
    var btnTarea = document.createElement("BUTTON");
    var btnText = document.createTextNode("Agregar tarea");
    btnTarea.setAttribute("id","btnAdd");
    btnTarea.appendChild(btnText);
    tarjeta.appendChild(btnTarea);
    // crear text-area
    btnAdd.onclick = function () {
      var addTask = document.createElement("TEXTAREA");
      var taskText = document.createTextNode("Añadir una tarea...");
    addTask.appendChild(taskText);
    tarjeta.appendChild(addTask);
    }
  }
}
