const parrafos = document.querySelectorAll("p");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera");

parrafos.forEach((parrafo) => {
    parrafo.addEventListener("dragstart", (even) => {
        parrafo.classList.add("dragging");
        even.dataTransfer.setData("id", parrafo.id);
    });
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach((seccion) => {
    seccion.addEventListener("dragover", (even) => {
        even.preventDefault();
        even.dataTransfer.dropEffect = "move";
    });
    seccion.addEventListener("drop", (even) => {
        const id_parrafo = even.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        if (seccion.id != "papelera") {
            seccion.appendChild(parrafo);
        } else {
            parrafo.remove();
        }
    });
});
