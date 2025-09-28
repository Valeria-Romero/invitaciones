
document.getElementById("confirmacion").addEventListener("submit", function (event) {
    event.preventDefault(); // 👈 evita que el form recargue la página
    let formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycby1bjBaWf1xLj6RLdjv8mdufuXV6inx69y7cFkg4xZtgJBCTHeZuzuIT-Le6vzD11cOuw/exec", {
        method: "POST",
        body: formData
    })
        // .then(res => res.text())
        // .then(data => {
        //     if (data.result === "success") {
        //         let msg = document.getElementById("status");
        //         msg.style.display = "block";
        //         msg.style.color = "green";
        //         msg.innerText = "Gracias 🎉, tu formulario fue enviado.";
        //     }
        // })
        // .catch(err => {
        //     console.error(err);
        // });
});

const btnConfirm = document.querySelector('.btn-confirm');
const msgThanks = document.querySelector('.thanks-message');
const btnClose = document.querySelector('.close-btn');

btnConfirm.addEventListener('click', () =>{
    msgThanks.style.display = 'flex';

    setTimeout(() =>{
        msgThanks.style.display = 'none';
    }, 10000)
})

btnClose.addEventListener('click', () =>{
    msgThanks.style.display = 'none';
})

const botonCuentas = document.querySelector(".buton-info-cuentas");
const info_cuentas = document.querySelector(".info_cuenta")

botonCuentas.addEventListener('click', () => {
    if(botonCuentas.innerHTML == "Mostrar cuentas"){
        botonCuentas.innerHTML = "Ocultar cuentas"
    }
    else{
        botonCuentas.innerHTML = "Mostrar cuentas"
    }
    info_cuentas.classList.toggle("hidden");
});


// Cuenta regresiva

const targetDate = new Date("2025-12-13T16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "¡Tiempo terminado!";
        clearInterval(interval); // detener el intervalo
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


const interval = setInterval(updateCountdown, 1000);


updateCountdown();

