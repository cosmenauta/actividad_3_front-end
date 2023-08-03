window.addEventListener('DOMContentLoaded', () => {
    //console.log("El DOM ha sido cargado correctamente.");

    const destinoInput = document.getElementById("FormSelectDestino");
    const presupuestoInput = document.getElementById("presupuesto-input");
    const fechaSalidaInput = document.getElementById("fechaSalida_input")
    const sorteoButton = document.querySelector("#draw-lottery-ticket-button");
    const lotteryBox = document.querySelector(".lottery-container");


    sorteoButton.addEventListener("click", (event) => {
        event.preventDefault();

        const destino = destinoInput.value;
        const fechaSalida = fechaSalidaInput.value;
        //cambios parseo a Number
        const presupuesto = new Number(presupuestoInput.value);
        const min = new Number(presupuestoInput.min);
        const max = new Number(presupuestoInput.max);
        console.log(presupuesto, min, max );

        let fechaSalidaFormat = new Date(fechaSalida)
        //añadido para compensar la diferencia horaria
        fechaSalidaFormat.setMinutes(fechaSalidaFormat.getMinutes() + fechaSalidaFormat.getTimezoneOffset())
        // formateo de la fecha de salida
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fechaSalidaFormat.toLocaleDateString('es-ES', options);
        //console.log(fechaFormateada);

        const valueSelected = destinoInput.options[destinoInput.selectedIndex].text;
        
        if (destino === "") {
            destinoInput.classList.add("is-invalid");
        } else {
            destinoInput.classList.remove("is-invalid");
        }
        
        if (presupuesto >= min && presupuesto <= max) {
            //console.log("Entre en if: pres: min: max:" + presupuesto, min, max);
            presupuestoInput.classList.remove("is-invalid");
        } else {
            //console.log("Entre en else: " + presupuesto, min, max);
            presupuestoInput.classList.add("is-invalid");
        }
        
        if (fechaSalida < fechaSalidaInput.min || fechaSalida > fechaSalidaInput.max) {
            fechaSalidaInput.classList.add("is-invalid");
        } else {
            fechaSalidaInput.classList.remove("is-invalid");
        }
        
        if (destino !== "" && presupuesto >= min && presupuesto <= max && fechaSalida >= fechaSalidaInput.min && fechaSalida <= fechaSalidaInput.max) {
            lotteryBox.style.backgroundImage = `url(./assets/img/${destino}.jpg)`;
        
            lotteryBox.innerHTML = `
                <div class="title">
                    <div class="info">
                        <h4 id="tituloDestino" class="name">Felicidades!!<br> has ganado un viaje a </br> ${valueSelected}</h4>
                    </div>
                </div>
                <div class="presupuesto">
                    <p id="tweet-description">Tu presupuesto aprobado </br> para gastos es: </br>${presupuesto}€</p>
                </div>
                <div class="fechaSalida">
                    <p id="tweet-description">La fecha de </br> tu viaje es: </br>${fechaFormateada}</p>
                </div>
            
                <div class="bottom-section d-flex justify-content-end">
                    <div id="like-button" class="btn">Like <i class="fa fa-heart"></i></div>
                </div>
            `;
        
            console.log(destino, presupuesto, fechaFormateada);

            destinoInput.value = "";
            presupuestoInput.value = 0;
            fechaSalidaInput.value = "";
        
            sorteoButton.classList.add("btn-success");
        
            setTimeout(() => {
                sorteoButton.classList.remove("btn-success");
            }, 1500);
            
        } else {
            sorteoButton.classList.add("btn-danger");
        
            setTimeout(() => {
                sorteoButton.classList.remove("btn-danger");
            }, 1500);
        }
    });
});
