const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    // console.log("click");
    alert("click en el boton");
});

//Con jQuery
$("button").click(() => {
    console.log("Hola estoy usando jQuery");
});
