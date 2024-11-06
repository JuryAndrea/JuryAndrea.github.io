import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
      let json = await response.json();
      if (response.status == 200) {

        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
        })
      } else {
        console.log(response);
        Swal.fire({
          title: 'Oops!',
          text: 'An error occurred while sending the message.',
          icon: 'error',
        })
      }
    } catch (error) {
      console.error("Error:", error);
    }

    form.reset();
    form.classList.remove("was-validated");


  });
});
