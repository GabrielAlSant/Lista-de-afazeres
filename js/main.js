window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("🗑️");
  
    span.appendChild(txt);
    li.appendChild(span);
    span.className = "lixeira";


    span.onclick = () => span.parentElement.style.display = "none"
  }
  
  document.querySelectorAll('li').forEach(createCloseButton);

  
  document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
      e.target.classList.toggle('checked');
  });

  function add() {
    let li = document.createElement('LI');
    let tarefa = document.form_main.task.value;
    let addtarefa = document.createTextNode(tarefa);
  
    li.appendChild(addtarefa);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";

    li.className = "lista";
  
    createCloseButton(li);
  }

  
