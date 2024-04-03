// let container = document.querySelector(".container");
// let phrase = document.querySelector(".title");
// let phraseSpan = document.querySelectorAll(".phrase");
// let link = document.getElementById("link-page");

// window.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     phraseSpan.forEach((span, idx) => {
//       setTimeout(() => {
//         span.classList.add("active");
//       }, (idx + 1) * 400);
//     });

//     document.addEventListener("keypress", function (event) {
//       if (event.keyCode === 13) {
//         setTimeout(() => {
//           phraseSpan.forEach((span, idx) => {
//             setTimeout(() => {
//               span.classList.remove("active");
//               span.classList.add("fade");
//             }, (idx + 1) * 50);
//           });
//         });

//         setTimeout(() => {
//           var nextPageUrl = "index2.html";
//           fetch(nextPageUrl)
//             .then((response) => response.text())
//             .then((html) => {
//               document.documentElement.innerHTML = html;
//             })
//             .catch((error) => {
//               console.error("Error loading next page:", error);
//             });
//         }, 700);
//       }
//     });
//   });
// });

let container = document.querySelector(".container");
let phrase = document.querySelector(".title");
let phraseSpan = document.querySelectorAll(".phrase");
let link = document.getElementById("link-page");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    phraseSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      phraseSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      container.style.top = "-100vh";
    }, 2300);
  });
});

// let container = document.querySelector(".container");
// let phrase = document.querySelector(".title");
// let phraseSpan = document.querySelectorAll(".phrase");
// let link = document.getElementById("link-page");

// window.addEventListener("DOMContentLoaded", () => {
//   // const pressEnter = document.createElement("div");
//   // pressEnter.textContent = "Press Enter to proceed";
//   // pressEnter.classList.add("press-enter");
//   // document.body.appendChild(pressEnter);

//   // // Style the element using CSS classes or inline styles (optional)

//   // function handleKeyPress(event) {
//   //   if (event.keyCode === 13) {
//   //     // Code to proceed (e.g., redirect to next page)
//   //     console.log("User pressed Enter!"); // Replace with your logic
//   //   }
//   // }

//   // window.addEventListener("keypress", handleKeyPress);

//   setTimeout(() => {
//     phraseSpan.forEach((span, idx) => {
//       setTimeout(() => {
//         span.classList.add("active");
//       }, (idx + 1) * 400);
//     });

//     document.addEventListener("keypress", (event) => {
//       if (event.keyCode === 13) {
//         setTimeout(() => {
//           phraseSpan.forEach((span, idx) => {
//             setTimeout(() => {
//               span.classList.remove("active");
//               span.classList.add("fade");
//             }, (idx + 1) * 50);
//           });
//         });

//         setTimeout(() => {
//           window.location.href = document.getElementById("link-page").href;
//         }, 700);
//       }
//     });
//   });
// });

// let container = document.querySelector(".container");
// let phrase = document.querySelector(".title"); // Selects the title element
// let phraseSpan = document.querySelectorAll(".phrase");

// window.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     phraseSpan.forEach((span, idx) => {
//       setTimeout(() => {
//         span.classList.add("active");
//       }, (idx + 1) * 400);
//     });

//     // Click event listener for the title element
//     phrase.addEventListener("click", function (event) {
//       event.stopPropagation(); // Prevent event bubbling

//       phraseSpan.forEach((span, idx) => {
//         setTimeout(() => {
//           span.classList.remove("active");
//           span.classList.add("fade");
//         }, (idx + 1) * 50);
//       });

//       // Promise-based approach to wait for all fade animations
//       Promise.all(
//         phraseSpan.map(
//           (span) =>
//             new Promise((resolve) => {
//               const timeout = setTimeout(() => {
//                 resolve();
//               }, (phraseSpan.length - span.dataset.index) * 50); // Adjusted order for reverse animation
//               span.dataset.index = idx; // Add index for reference in promise
//             })
//         )
//       ).then(() => {
//         // Utilize the existing link functionality
//         document.getElementById("link-page").click();
//       });
//     });
//   });
// });
