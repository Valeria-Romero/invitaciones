
const form = document.getElementById('confirmacion');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data)
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzXWNUz-6HhNy_KxFkkviBKsQulbUvaqYwZoMJM_oyleSfedpd4TpTGGiR8ZfW6k1CT9w/exec", {
            method: "POST",
            // headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        status.textContent = "Recibimos tu confirmación, muchas gracias!";
        form.reset();
    } catch (err) {
        status.textContent = "❌ Error submitting form.";
        console.error(err);
    }
});
