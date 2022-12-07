//GESTIONE EVENTI AL CLICK DEI BOTTONI SOCIAL

const linkEl = document.querySelector("#facebook");
linkEl.addEventListener("click", () =>
  window.open("https://www.facebook.com/chiara.cirrito.7/", "_blank")
);

const link = document.querySelector("#instagram");
link.addEventListener("click", () =>
  window.open("https://www.instagram.com/chiarac16/", "_blank")
);

const ElLink = document.querySelector("#linkedin");
ElLink.addEventListener("click", () =>
  window.open(
    "https://www.linkedin.com/in/chiara-cirrito-90a2021b7/",
    "_blanck"
  )
);

const button = document.querySelector(".contattami");
button.addEventListener("click", () =>
  window.scrollTo(0, document.body.scrollHeight)
);
