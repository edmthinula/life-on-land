var resourcesToPreload = [
  "index2.html",
  "images/blue-forest.jpg",
  "images/rainforest-bright-1.jpg",
  "images/rainforest-bright-2.jpg",
  "images/Lioness.jpg",
  "images/tigers.jpg",
  "images/dry-leaves.jpg",
];

var loadedResources = 0;

function checkIfAllResourcesLoaded() {
  loadedResources++;
  if (loadedResources === resourcesToPreload.length) {
    window.location.href = "shop.html";
  }
}

resourcesToPreload.forEach(function (resource) {
  var preloadLink = document.createElement("link");
  preloadLink.href = resource;
  preloadLink.rel = "preload";
  preloadLink.as = "document";

  preloadLink.onload = checkIfAllResourcesLoaded;
  document.head.appendChild(preloadLink);
});

let body_3 = document.querySelector(".body-3");
setTimeout(() => {
  body_3.style.transform = "translateY(-100vh)";
}, 6000);

setTimeout(() => {
  window.location.href = "home.html";
}, 10000);
