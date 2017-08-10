
Input.onclick = function () {
  var grupoLi = document.getElementById("grupoLista");
  var inputText = document.createElement("INPUT");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", "addText");
    inputText.setAttribute("placeholder", "Ingresa el nombre de la lista");
    grupoLi.appendChild(inputText);
  var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Guardar");
    btn.setAttribute("id","btnSaveList");
    btn.appendChild(t);
    grupoLi.appendChild(btn);
    btnSaveList.onclick = function () {
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
        document.getElementById("lista-tarea").appendChild(title);
      }
      document.getElementById("addText").value = "";
      //crear lista
      var lista = document.getElementById("card");
      var ul = document.createElement("ul");
      var li = document.createElement("li");
      li.setAttribute("class","card1");
      li.setAttribute("contenteditable","");
      var liText = document.createTextNode(li);
      ul.appendChild(li);
      lista.appendChild(ul);
    }
}
