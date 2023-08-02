window.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World, the DOM is loaded.");

    const destinoInput = document.getElementById("FormSelectDestino");
    const presupuestoInput = document.getElementById("presupuesto-input");
    //añadido campo Fecha 
    const fechaSalidaInput = document.getElementById("fechaSalida_input")
    // End cambios
    const sorteoButton = document.querySelector("#draw-lottery-ticket-button");
    const lotteryBox = document.querySelector(".lottery-container");

    console.log(destinoInput.id, presupuestoInput.id,fechaSalidaInput.id);
    console.log(sorteoButton);

    sorteoButton.addEventListener("click", (event) => {
        event.preventDefault();

        const destino = destinoInput.value;
        const presupuesto = presupuestoInput.value;
        const fechaSalida = fechaSalidaInput.value;
        let fechaSalidaFormat = new Date(fechaSalida)
        //añadido para compensar la diferencia horaria
        fechaSalidaFormat.setMinutes(fechaSalidaFormat.getMinutes() + fechaSalidaFormat.getTimezoneOffset())
        const fechaFormateada = fechaSalidaFormat.toLocaleDateString();

        const  valueSelected = destinoInput.options[destinoInput.selectedIndex].text;
  
     

        if (destino === "") {
            destinoInput.classList.add("is-invalid");

          } else {
            destinoInput.classList.remove("is-invalid");
 
          }
          
          
        if(presupuesto < 100){
            presupuestoInput.classList.add("is-invalid");
        } else{
            presupuestoInput.classList.remove("is-invalid");

        }
        if(fechaSalida ===""){
            fechaSalidaInput.classList.add("is-invalid");
        } else{
            fechaSalidaInput.classList.remove("is-invalid");
            
        }

        if(destino !== "" && presupuesto > 99 && presupuesto < 4001 && fechaSalida !== ""){

                lotteryBox.style.backgroundImage = `url(./assets/img/${destino}.jpg)`;
            
                lotteryBox.innerHTML =
                ` <div class="title">
                
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
                fechaSalidaInput.value="";
          
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
