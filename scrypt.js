// BOTÃO WHATSAPP
const botaoPrimario = document.querySelector(".botaoprimario");
if (botaoPrimario) {
  botaoPrimario.addEventListener("click", () => {
    window.open("https://wa.me/5586981107156", "_blank");
  });
}

// SCROLL PARA CONTATO
const botaoSecondario = document.querySelector(".botaosecondario");
if (botaoSecondario) {
  botaoSecondario.addEventListener("click", () => {
    document.querySelector("#section3").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// ANIMAÇÃO AO ROLAR A PÁGINA
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => {
  observer.observe(card);
});
