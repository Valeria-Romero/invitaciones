
document.getElementById("confirmacion").addEventListener("submit", function (event) {
    // event.preventDefault(); // 👈 evita que el form recargue la página
    console.log("Click form")
    let formData = new FormData(this);
    console.log(formData)

    fetch("https://script.google.com/macros/s/AKfycby1bjBaWf1xLj6RLdjv8mdufuXV6inx69y7cFkg4xZtgJBCTHeZuzuIT-Le6vzD11cOuw/exec", {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data.result === "success") {
                let msg = document.getElementById("status");
                msg.style.display = "block";
                msg.style.color = "green";
                msg.innerText = "Gracias 🎉, tu formulario fue enviado.";
            }
        })
        .catch(err => {
            console.error(err);
        });
});

