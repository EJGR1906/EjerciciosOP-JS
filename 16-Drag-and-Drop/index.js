const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
    parrafo.addEventListener("dragstart", (event) => {
        console.log("Estoy arrastrando el parrafo:", parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
    });
    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach((seccion) => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault();
        console.log("Dragover");

        //To do
    });
    seccion.addEventListener("drop", (event) => {
        console.log("drop");
        const idParrafo = event.dataTransfer.getData("id");
        // console.log("parrafo id:", idParrafo);
        const parrafo = document.getElementById(idParrafo);
        seccion.appendChild(parrafo);
    });
});
