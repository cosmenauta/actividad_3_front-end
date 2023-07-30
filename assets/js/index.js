window.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World, the DOM is loaded.");

    const cityInput = document.getElementById("city");
    const populationInput = document.getElementById("population");
    const botonButton = document.querySelector("#botontonton");

    console.log(cityInput.id, populationInput.id);
    console.log(botonButton);

    botonButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(event);

        const city = cityInput.value;
        const population = populationInput.value;
        console.log(city, population);
    });
});
