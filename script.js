 // Simulação de envio de reserva
    document.getElementById("bookingForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const message = document.getElementById("success-message");
      message.style.display = "block";
      this.reset();
      setTimeout(() => message.style.display = "none", 5000);
    });