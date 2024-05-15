window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("north").style.padding = "20px 20px";
    document.getElementById("h1").style.fontSize = "70px";
    document.getElementById("north").style.height = "15%";
    document.getElementById("h1").style.maxWidth = "100%";
    
    document.getElementById("logo_white").style.marginTop = "-60%";
    document.getElementById("logo_white").style.marginLeft = "5%";
    document.getElementById("logo_white").style.width = "45%";

    document.getElementById("content").style.marginTop = "25%";
    document.getElementById("content").style.marginBottom = "3%";
  } else {
    document.getElementById("north").style.padding = "30px 10px";
    document.getElementById("h1").style.fontSize = "200px";
    document.getElementById("north").style.height = "65%";
    document.getElementById("h1").style.maxWidth = "20%";
    document.getElementById("h1").style.marginLeft = "2%";

    document.getElementById("logo_white").style.marginTop = "140%";
    document.getElementById("logo_white").style.marginLeft = "40%";
    document.getElementById("logo_white").style.width = "50%";

    document.getElementById("content").style.marginTop = "32.5%";
  }
}

/*
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('paynow');
  const loader = document.querySelector('.loader');

  button.addEventListener("click", () => {
      loader.classList.remove('loader-hidden');

      // Simula una descarga (aquí podrías hacer una petición AJAX)
      setTimeout(() => {
          // Simulación de descarga completada después de 3 segundos
          // Aquí podrías realizar la redirección a la URL de descarga real
          window.location.href = button.getAttribute('onclick').split("'")[1];

          // Oculta el loader después de la descarga
          loader.classList.add('loader-hidden');
      }, 2); // Cambia este valor a la duración real de tu proceso de descarga
  });
});
*/