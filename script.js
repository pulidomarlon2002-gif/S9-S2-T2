function agregarTarea() {
    const input = document.getElementById("tarea");
    const lista = document.getElementById("lista");

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = input.value;

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.className = "btn btn-danger btn-sm";

    span.addEventListener("click", () => {
        li.classList.toggle("completada");
    });

    btn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(btn);
    lista.appendChild(li);

    input.value = "";
}