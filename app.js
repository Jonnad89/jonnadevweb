document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te responderé pronto.");
  this.reset();
});

