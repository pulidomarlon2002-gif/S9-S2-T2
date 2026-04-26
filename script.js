function agregarTarea() {
    const input = document.getElementById("tarea");
    const lista = document.getElementById("lista");

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
        <span>${input.value}</span>
        <button class="btn btn-danger btn-sm">X</button>
    `;

    li.querySelector("span").addEventListener("click", () => {
        li.classList.toggle("completada");
    });

    li.querySelector("button").addEventListener("click", () => {
        li.remove();
    });
    
    lista.appendChild(li);
    input.value = "";
}