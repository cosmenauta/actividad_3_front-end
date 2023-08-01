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
        /* const formatFecha = fechaSalida.datepicker({  format: 'dd-mm-yyyy'  });  
        console.log(formatFecha); */


        const  valueSelected = destinoInput.options[destinoInput.selectedIndex].text;
        console.log(valueSelected);
     

        if (destino === "") {
            destinoInput.classList.add("is-invalid");
            console.log("pasa1");
          } else {
            destinoInput.classList.remove("is-invalid");
            console.log("pasa2");
          }
          
          
        if(presupuesto < 100){
            presupuestoInput.classList.add("is-invalid");
            console.log("pasa3");
        } else{
            presupuestoInput.classList.remove("is-invalid");
            console.log("pasa4");
        }
        if(fechaSalida ===""){
            fechaSalidaInput.classList.add("is-invalid");
            console.log("pasa5");
        } else{
            fechaSalidaInput.classList.remove("is-invalid");
            
            console.log("pasa6");
        }

        if(destino !== "" && presupuesto > 99 && presupuesto < 4001 && fechaSalida !== ""){
            console.log("pasa7");
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
                <p id="tweet-description">La fecha de </br> tu viaje es: </br>${fechaSalida}</p>
                </div>
            
                <div class="bottom-section d-flex justify-content-end">
                <div id="like-button" class="btn">Like <i class="fa fa-heart"></i></div>
                </div>
            `; 
            
                console.log(destino, presupuesto, fechaSalida, lotteryBox.value);

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
