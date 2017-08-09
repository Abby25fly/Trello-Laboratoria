
Input.onclick = function () {
  var grupoLi = document.getElementById("grupoLista");
  var inputText = document.createElement("INPUT");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", "addText");
    inputText.setAttribute("placeholder", "Ingresa el nombre de la lista");
    grupoLi.appendChild(inputText);
  var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Guardar Lista");
    btn.setAttribute("id","btnSaveList");
    btn.appendChild(t);
    document.body.appendChild(btn);
    btnSaveList.onclick = function () {
      var li = document.createElement("li");
      var lista = document.getElementById("addText").value;
      var ntext = document.createTextNode(lista);
      li.appendChild(ntext);
      if (lista === "") {
        alert("No has escrito nada!");
      } else {
        document.getElementById("nameList").appendChild(li);
      }
      document.getElementById("addText").value = "";
    }
}
/*
// Añadir un elemento desde el input
function addInput() {
  var li = document.createElement("li");
  var toDo = document.getElementById("newInput").value;
  var ntext = document.createTextNode(toDo);
  li.appendChild(ntext);
  if (lista === "") {
    alert("No has escrito nada!");
  } else {
    document.getElementById("nameList").appendChild(li);
  }
  document.getElementById("addText").value = "";

  var span = document.createElement("SPAN");
  var x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  li.appendChild(span);

  for (i = 0; i < borrar.length; i++) {
    borrar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  tasks.push(toDo);
}

*/
