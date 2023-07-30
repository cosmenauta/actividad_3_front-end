window.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World, the DOM is loaded.");

    const destinoInput = document.getElementById("destino");
    const presupuestoInput = document.getElementById("presupuesto");
    const sorteoButton = document.querySelector("#draw-lottery-ticket-button");

    console.log(destinoInput.id, presupuestoInput.id);
    console.log(sorteoButton);

    sorteoButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(event);

        const destino = destinoInput.value;
        const presupuesto = presupuestoInput.value;
        console.log(destino, presupuesto);
    });
});
