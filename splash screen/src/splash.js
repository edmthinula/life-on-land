let container = document.querySelector(".container");
let phrase = document.querySelector(".title");
let phraseSpan = document.querySelectorAll(".phrase");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    phraseSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13) {
        setTimeout(() => {
          phraseSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove("active");
              span.classList.add("fade");
            }, (idx + 1) * 50);
          });
        });

        setTimeout(() => {
          var nextPageUrl = "index2.html"; //replce index.2.html with next page

          fetch(nextPageUrl)
            .then((response) => response.text())
            .then((html) => {
              document.documentElement.innerHTML = html;
            })
            .catch((error) => {
              console.error("Error loading next page:", error);
            });
        }, 700);
      }
    });
  });
});
