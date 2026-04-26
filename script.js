function agregarTarea() {
    const input = document.getElementById("tarea");
    const lista = document.getElementById("lista");

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = input.value;

    lista.appendChild(li);
    input.value = "";
}